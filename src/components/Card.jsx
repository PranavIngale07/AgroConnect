import React from "react";

const Card = () => {
  return (
    <div className="bg-white bg-opacity-30 border-none outline-none rounded-xl shadow-lg p-6 w-[500px] h-[500px]">
      <h2 className="text-4xl font-bold text-center text-black m-auto">
        Towards a better future
      </h2>
      <div className="flex justify-center mb-4 mt-8 md:mt-11">
        <img
          src="/AgroConnect.png"
          className="w-[150px] sm:w-[200px] md:w-[250px] h-auto object-contain"
          alt="AgroConnect"
        />
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition duration-300 text-xl sm:text-2xl md:text-3xl h-[50px] sm:h-[55px] md:h-[60px] w-[180px] sm:w-[200px] md:w-[220px] items-center">
          Let's Connect
        </button>
      </div>
    </div>
  );
};

export default Card;
