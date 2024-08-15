import React, { useState } from "react";

const SoilHealth = () => {
  const [formData, setFormData] = useState({
    pH: "",
    organicMatter: "",
    moistureContent: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    porosity: "",
    waterHoldingCapacity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send formData to the backend for prediction
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/soil_health.jpg')" }}>
      <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg w-[28rem] p-6">
        <p className="font-bold text-2xl mb-4 text-center text-black">Soil Health</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input fields with glass effect */}
          <div>
            <label className="form-control w-full">
              <span className="label-text text-left block mb-1 text-black">pH:</span>
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
              <span className="label-text text-left block mb-1 text-black">Organic Matter %:</span>
              <input
                type="text"
                placeholder="Enter Oragnic Matter %"
                name="organicMatter"
                value={formData.organicMatter}
                onChange={handleChange}
                className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <span className="label-text text-left block mb-1 text-black">Moisture Content %:</span>
              <input
                type="text"
                placeholder="Enter Moisture Content %"
                name="moistureContent"
                value={formData.moistureContent}
                onChange={handleChange}
                className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <span className="label-text text-left block mb-1 text-black">Nitrogen (N ppm):</span>
              <input
                type="text"
                placeholder="N ppm"
                name="nitrogen"
                value={formData.nitrogen}
                onChange={handleChange}
                className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <span className="label-text text-left block mb-1 text-black">Phosphorus (P ppm):</span>
              <input
                type="text"
                placeholder="P ppm"
                name="phosphorus"
                value={formData.phosphorus}
                onChange={handleChange}
                className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <span className="label-text text-left block mb-1 text-black">Potassium (K ppm):</span>
              <input
                type="text"
                placeholder="K ppm"
                name="potassium"
                value={formData.potassium}
                onChange={handleChange}
                className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <span className="label-text text-left block mb-1 text-black">Porosity %:</span>
              <input
                type="text"
                placeholder="Enter Porosity %"
                name="porosity"
                value={formData.porosity}
                onChange={handleChange}
                className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <span className="label-text text-left block mb-1 text-black">Water Holding Capacity %:</span>
              <input
                type="text"
                placeholder="Enter Walter Holding Capacity"
                name="waterHoldingCapacity"
                value={formData.waterHoldingCapacity}
                onChange={handleChange}
                className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md bg-teal-600 hover:bg-teal-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SoilHealth;
