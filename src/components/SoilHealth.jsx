import React, { useState } from "react";
import axios from "axios";
import GaugeChart from "react-gauge-chart";
import Navbar from "./Navabr";

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

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [predictionValue, setPredictionValue] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      const predictionValue = response.data.prediction;
      setPredictionValue(predictionValue);

      let statusText;
      if (predictionValue <= 3) {
        statusText = "Poor";
      } else if (predictionValue <= 7) {
        statusText = "Moderate";
      } else {
        statusText = "Good";
      }

      setStatus(statusText);
      setShowForm(false);
    } catch (error) {
      setLoading(false);
      setError("There was an error making the request!");
      console.error("There was an error making the request!", error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center pt-14 md:pt-16 "
        style={{ backgroundImage: "url('/soil_health.jpg')" }}
      >
        <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg w-[90%] md:w-[32rem] lg:w-[28rem] p-6 mx-4 sm:mx-0 max-h-[80vh] overflow-y-auto">
          <p className="font-bold text-xl md:text-2xl mb-4 text-center text-black">
            Soil Health
          </p>

          {showForm ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="form-control w-full">
                  <span className="label-text text-left block mb-1 text-black">
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
                  <span className="label-text text-left block mb-1 text-black">
                    Organic Matter %:
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Organic Matter %"
                    name="organicMatter"
                    value={formData.organicMatter}
                    onChange={handleChange}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <span className="label-text text-left block mb-1 text-black">
                    Moisture Content %:
                  </span>
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
                  <span className="label-text text-left block mb-1 text-black">
                    Nitrogen (N ppm):
                  </span>
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
                  <span className="label-text text-left block mb-1 text-black">
                    Phosphorus (P ppm):
                  </span>
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
                  <span className="label-text text-left block mb-1 text-black">
                    Potassium (K ppm):
                  </span>
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
                  <span className="label-text text-left block mb-1 text-black">
                    Porosity %:
                  </span>
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
                  <span className="label-text text-left block mb-1 text-black">
                    Water Holding Capacity %:
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Water Holding Capacity"
                    name="waterHoldingCapacity"
                    value={formData.waterHoldingCapacity}
                    onChange={handleChange}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-white bg-opacity-20 backdrop-blur-lg text-black outline-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full text-white py-2 px-4 rounded-md bg-teal-600 hover:bg-teal-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="text-center">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <>
                  <p className="text-black text-xl">
                    Soil Health Status: {status}
                  </p>
                  <GaugeChart
                    id="gauge-chart1"
                    nrOfLevels={3}
                    colors={["#EA4228", "#F5CD19", "#5BE12C"]}
                    arcWidth={0.3}
                    percent={predictionValue / 10}
                    textColor="#000000"
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SoilHealth;
