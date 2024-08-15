import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/chat', { message });
            setResponse(res.data.response);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="chatbox">
            <div className="chatbox__button">
                <button>
                    <img src="/images/chatbox-icon.svg" alt="Chat Icon" />
                </button>
            </div>
            <div className="chatbox__support">
                <div className="chatbox__header">
                    <div className="chatbox__image--header">
                        <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="User" />
                    </div>
                    <div className="chatbox__content--header">
                        <h4 className="chatbox__heading--header">Chat support</h4>
                        <p className="chatbox__description--header">Hi. My name is Sam. How can I help you?</p>
                    </div>
                </div>
                <div className="chatbox__messages">
                    <p>{response}</p>
                </div>
                <div className="chatbox__footer">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write a message..."
                    />
                    <button onClick={sendMessage} className="chatbox__send--footer">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
