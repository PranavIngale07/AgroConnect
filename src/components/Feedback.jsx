import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const FeedbackForm = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false); // State to track submission
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set the submitted state to true when form is submitted
    console.log("Feedback submitted:", { email, feedback });
    // You can add your form submission logic here (e.g., API call)
  };

  useEffect(() => {
    if (submitted) {
      const timeout = setTimeout(() => {
        navigate("/"); // Redirect to the main page after 3 seconds
      }, 2000);

      return () => clearTimeout(timeout); // Cleanup timeout if the component unmounts
    }
  }, [submitted, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 bg-cover bg-center" style={{ backgroundImage: "url('/soil_health.jpg')" }}>
      {submitted ? ( // Conditional rendering based on submission
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h1 className="font-bold text-xl md:text-2xl text-center text-black">Form submitted, thank you!</h1>
          <p className="text-sm text-gray-700">You will be redirected to the main page shortly.</p>
        </div>
      ) : (
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="font-bold text-xl md:text-2xl mb-4 text-center text-black">Feedback</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-left text-black font-bold mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="feedback"
                className="block text-left text-black font-bold mb-1"
              >
                Feedback:
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
                placeholder="Enter your feedback"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
