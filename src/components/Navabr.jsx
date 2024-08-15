import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import Weather from './Weather';
import SoilHealth from './SoilHealth';
import Crop_Recommender from './Crop_Recommender';
import Advisor from './Advisor';

const Navabr = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10 bg-white  backdrop:blur-md bg-opacity-20 text-black font-semibold">
      <Link to="/">AgroInnovate</Link>
      
      <div className="flex space-x-8">
        <Weather />
        <Link to="/soil-health">  {/* Link to the SoilHealth route */}
          Soil Health
        </Link>
        <Link to="/crop-recommend">Crop Recommender</Link>
        <Advisor />
      </div>

      <div>Contact Us</div>
    </div>
  );
};

export default Navabr;

