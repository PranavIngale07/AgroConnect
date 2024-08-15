import React from 'react'
import Navabr from '../components/Navabr'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <>
    <Navabr/>
      <div className="relative w-full h-screen">
        <img
          src="/home_bg2.jpg"
          alt=""
          className="object-cover w-full h-full opacity-90"
        />
        <div className="absolute bottom-0 right-0 m-4">
                    <Chat/>
                </div>
      </div>
    </>
  )
}

export default Home
