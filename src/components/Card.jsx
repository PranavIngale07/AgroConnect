// src/components/Card.js
import React from "react";

const Card = () => {
  return (
    <div className="bg-white bg-opacity-30 border-none outline-none rounded-xl shadow-lg p-6 w-[500px] h-[500px]">
      <h2 className="text-4xl font-bold text-center text-black m-auto">
        Towards a better future
      </h2>
      <div className="flex justify-center mb-4 mt-11">
        <img src="/AgroConnect.png" className="w-[250px] h-[250px] object-contain" />
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition duration-300 h-[60px] w-[220px] text-3xl items-center">
          Let's Connect
        </button>
      </div>
    </div>
  );
};

export default Card;
