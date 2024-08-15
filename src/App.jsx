import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SoilHealth from './components/SoilHealth';  // Import the SoilHealth component
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/soil-health" element={<SoilHealth />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
