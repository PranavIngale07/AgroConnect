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
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 mt-28">
          <Card />  {/* Add the Card component here */}
        </div>
        <div className="absolute bottom-0 right-0 m-4">
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Home;
