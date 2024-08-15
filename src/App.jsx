import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SoilHealth from './components/SoilHealth';  // Import the SoilHealth component
import Home from './pages/Home';
import Crop_recommender from './components/Crop_Recommender';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/soil-health" element={<SoilHealth />} />
        <Route path="/crop-recommend" element={<Crop_recommender/>} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
