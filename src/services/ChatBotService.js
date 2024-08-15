import axios from 'axios';

const API_URL = 'http://localhost:5000/api/chat'; // Adjust this if needed

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(API_URL, { message }, {
            headers: {
                'Content-Type': 'application/json',
                // Other headers can be set here if needed
            }
        });
        return response.data.response;
    } catch (error) {
        console.error('Error sending message:', error);
        return "Error sending message.";
    }
};
