import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import Weather from "./Weather";
import SoilHealth from "./SoilHealth";
import Crop_Recommender from "./Crop_Recommender";
import FeedbackForm from "./Feedback";

const Navabr = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10 bg-white  backdrop:blur-md bg-opacity-40 text-black font-bold text-xl">
      <Link to="/">AgroInnovate</Link>

      <div className="flex space-x-8">
        <Link to="/weather"> Weather</Link>
        <Link to="/soil-health">
          {" "}
          {/* Link to the SoilHealth route */}
          Soil Health
        </Link>
        <Link to="/crop-recommend">Crop Recommender</Link>
      </div>
      <Link to="/feedback">Feedback</Link> {/* Feedback Link added here */}
    </div>
  );
};

export default Navabr;
