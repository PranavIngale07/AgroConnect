import random
import json
import torch
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from model import NeuralNet
from nltk_utils import bag_of_words, tokenize
import numpy as np
import pickle

# Flask app initialization
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})  # Enable CORS for your API

# Initialize the device and load chatbot model
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('intents.json', 'r') as json_data:
    intents = json.load(json_data)

FILE = "data.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

chatbot_model = NeuralNet(input_size, hidden_size, output_size).to(device)
chatbot_model.load_state_dict(model_state)
chatbot_model.eval()

bot_name = "Sam"

# Function to get chatbot response
def get_response(msg):
    sentence = tokenize(msg)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = chatbot_model(X)
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]
    if prob.item() > 0.75:
        for intent in intents['intents']:
            if tag == intent["tag"]:
                return random.choice(intent['responses'])

    return "I do not understand..."

# Route for the main page
@app.route("/")
def home():
    return render_template("base.html")

# Route for handling the chatbot response
@app.route("/api/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    if user_message:
        bot_response = get_response(user_message)
        return jsonify({"response": bot_response})
    else:
        return jsonify({"response": "Please enter a valid message."})

#__________________________SOIL HEALTH________________________

# Predefined min and max values for soil health scaling
min_values = np.array([4.00000193, 1.00000478, 5.00001011, 5.00009124, 10.00001533, 100.00073082, 25.00000713, 20.00001931])
max_values = np.array([8.99998633, 9.99999925, 34.99997749, 199.99994376, 49.99999093, 399.99981202, 49.99999318, 59.99993466])

def scale_data(features):
    scaled_features = (features - min_values) / (max_values - min_values)
    return scaled_features

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        features = np.array([
            float(data.get('pH', 0)),
            float(data.get('organicMatter', 0)),
            float(data.get('moistureContent', 0)),
            float(data.get('nitrogen', 0)),
            float(data.get('phosphorus', 0)),
            float(data.get('potassium', 0)),
            float(data.get('porosity', 0)),
            float(data.get('waterHoldingCapacity', 0))
        ])
        
        scaled_features = scale_data(features)
        # Dummy prediction logic (Replace with actual prediction)
        prediction = np.sum(scaled_features)  # Example logic
        return jsonify({'prediction': prediction})
    
    except Exception as e:
        print("Error processing request:", e)
        return jsonify({'error': str(e)}), 500


#___________________CROP RECOMMENDER_______________________________
# Load models and scalers
crop_recommender_model = pickle.load(open('model.pkl', 'rb'))
sc = pickle.load(open('standardscaler.pkl', 'rb'))
mx = pickle.load(open('minmaxscaler.pkl', 'rb'))

@app.route('/')
def index():
    return "Welcome to the Crop Recommendation System!"

@app.route("/crop", methods=['POST'])
def prediction():
    data = request.form.to_dict()  # Get form data as a dictionary
    try:
        # Extract features from form data
        feature_list = [
            data['Nitrogen'],
            data['Phosporus'],
            data['Potassium'],
            data['Temperature'],
            data['Humidity'],
            data['pH'],
            data['Rainfall']
        ]
        single_pred = np.array(feature_list).reshape(1, -1)

        # Process features
        mx_features = mx.transform(single_pred)
        sc_mx_features = sc.transform(mx_features)
        prediction = crop_recommender_model.predict(sc_mx_features)

        # Map prediction to crop
        crop_dict = {
            1: 'Rice', 2: 'Maize', 3: 'Chickpea', 4: 'Kidneybeans',
            5: 'Pigeonpeas', 6: 'Mothbeans', 7: 'Mungbean', 8: 'Blackgram',
            9: 'Lentil', 10: 'Pomegranate', 11: 'Banana', 12: 'Mango',
            13: 'Grapes', 14: 'Watermelon', 15: 'Muskmelon', 16: 'Apple',
            17: 'Orange', 18: 'Papaya', 19: 'Coconut', 20: 'Cotton',
            21: 'Jute', 22: 'Coffee'
        }

        # Get the crop name
        crop = crop_dict.get(prediction[0], "Unknown crop")
        result = f"{crop} is the best crop to be cultivated !"
        
        return jsonify(result=result)
    except Exception as e:
        return jsonify(error=str(e)), 500


# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True, port=5000)
