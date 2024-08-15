import React, { useState } from "react";
import axios from "axios";
import Navabr from "./Navabr";  // Ensure the correct import name
import farmer from '/farmer.png'; // Make sure to import the chat icon

const CropRecommender = () => {
  const [formData, setFormData] = useState({
    Nitrogen: "",
    Phosporus: "",
    Potassium: "",
    Temperature: "",
    Humidity: "",
    pH: "",
    Rainfall: "",
  });

  const [result, setResult] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/crop",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setLoading(false);
      if (response.data.error) {
        setResult(`Error: ${response.data.error}`);
      } else {
        setResult(response.data.result);
      }
      setShowForm(false);
    } catch (error) {
      setLoading(false);
      setError("There was an error making the request!");
      setResult(`Failed to fetch crop recommendation: ${error.message}`);
      console.log(error.message);
    }
  };

  return (
    <>
      <Navabr />
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center pt-14 md:pt-16"
        style={{ backgroundImage: "url('/soil_health.jpg')" }}
      >
        <div className="glassCard bg-white bg-opacity-25 backdrop-blur-md rounded-lg shadow-lg w-[90%] md:w-[70%] p-6 mx-4 sm:mx-0 max-h-[80vh] overflow-y-auto">
          <p className="font-bold text-xl md:text-2xl mb-4 text-center text-black">
            Crop Recommender
          </p>

          {showForm ? (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label className="form-control w-full">
                  <span className="label-text text-left block mb-1 text-black font-semibold text-lg">
                    pH:
                  </span>
                  <input
                    type="text"
                    placeholder="Enter pH"
                    name="pH"
                    value={formData.pH}
                    onChange={handleChange}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <span className="label-text text-left block mb-1 text-black font-semibold text-lg">
                    Rainfall:
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Rainfall in mm"
                    name="Rainfall"
                    value={formData.Rainfall}
                    onChange={handleChange}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <span className="label-text text-left block mb-1 text-black font-semibold text-lg">
                    Humidity:
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Humidity"
                    name="Humidity"
                    value={formData.Humidity}
                    onChange={handleChange}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <span className="label-text text-left block mb-1 text-black font-semibold text-lg">
                    Nitrogen (N ppm):
                  </span>
                  <input
                    type="text"
                    placeholder="N ppm"
                    name="Nitrogen"
                    value={formData.Nitrogen}
                    onChange={handleChange}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <span className="label-text text-left block mb-1 text-black font-semibold text-lg">
                    Phosphorus (P ppm):
                  </span>
                  <input
                    type="text"
                    placeholder="P ppm"
                    name="Phosporus"
                    value={formData.Phosporus}
                    onChange={handleChange}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <span className="label-text text-left block mb-1 text-black font-semibold text-lg">
                    Potassium (K ppm):
                  </span>
                  <input
                    type="text"
                    placeholder="K ppm"
                    name="Potassium"
                    value={formData.Potassium}
                    onChange={handleChange}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <span className="label-text text-left block mb-1 text-black font-semibold text-lg">
                    Temperature:
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Temperature"
                    name="Temperature"
                    value={formData.Temperature}
                    onChange={handleChange}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
                  />
                </label>
              </div>
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="w-1/2 text-white py-2 px-4 rounded-md bg-teal-600 hover:bg-teal-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <>

              {result && (
                <div className="mt-6 p-16 bg-gray-300 h-[200px] bg-opacity-50 text-black text-4xl  rounded-xl shadow-lg text-center">
                  {result}
                </div>
              )}
            </>
          )}

<div className="fixed bottom-1 right-1 z-50">
                <img
                    src={farmer}
                    alt="Chat"
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="cursor-pointer w-[9rem] h-[9rem]"
                />
            </div>
        </div>
      </div>
    </>
  );
};

export default CropRecommender;
