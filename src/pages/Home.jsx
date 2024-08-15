import React from "react";
import Navabr from "../components/Navabr";
import Chat from "../components/Chat";
import Card from "../components/Card";  // Import the Card component

const Home = () => {
  return (
    <>
      <Navabr />
      <div className="relative w-full h-screen">
        <img
          src="/home_bg2.jpg"
          alt=""
          className="object-cover w-full h-full opacity-90"
        />
        {/* Centering the Card both horizontally and vertically */}
        <div className="absolute inset-0 top-20 flex items-center justify-center">
          <Card />  {/* Add the Card component here */}
        </div>
        <div className="absolute bottom-4 right-4">
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Home;
