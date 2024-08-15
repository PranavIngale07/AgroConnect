import React, { useState } from 'react';
import { sendMessage } from '../services/ChatBotService.js'; // Import the API service
import chatIcon from '/chat.png'; // Make sure to import the chat icon

const Chat = () => {
    const [userMessage, setUserMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!userMessage) return;

        // Add user message to chat history
        setChatHistory((prev) => [...prev, { from: 'user', text: userMessage }]);
        setUserMessage('');

        // Send message to Flask backend
        const response = await sendMessage(userMessage);
        // Add bot response to chat history
        setChatHistory((prev) => [...prev, { from: 'bot', text: response }]);
    };

    return (
        <div>
            {/* Chat Icon */}
            <div className="fixed bottom-7 right-10 z-50">
                <img
                    src={chatIcon}
                    alt="Chat"
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="cursor-pointer w-12 h-12"
                />
            </div>

            {/* Chat Box */}
            {isChatOpen && (
                <div className="fixed bottom-20 right-4 z-50 p-4 bg-white shadow-md rounded-md max-w-xs  mb-2 backdrop-blur-lg bg-opacity-35">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-t-md flex items-center">
                        <img
                            src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" // Assuming the same icon can be used for the avatar
                            alt="Avatar"
                            className="w-8 h-8 mr-2 rounded-full"
                        />
                        <div>
                        <span className='font-semibold text-xl'>Chat Support</span>
                        <p class="chatbox__description--header">Hi. My name is Sam. How can I help you?</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 max-h-60 overflow-y-auto border-t border-gray-300 m-auto">
                        {chatHistory.map((chat, index) => (
                            <div key={index} className={chat.from === 'user' ? 'bg-blue-500 text-white p-2 rounded-lg mb-2' : 'bg-gray-300 text-black p-2 rounded-lg mb-2'}>
                                {chat.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSendMessage} className="flex  mt-2">
                        <input
                            type="text"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            placeholder="Write a message..."
                            className="flex-grow border-0 p-2 rounded-bl-md rounded-tl-md"
                        />
                        
                        <button type="submit" className="bg-blue-500 text-white px-4 rounded-br-md rounded-tr-md">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chat;
