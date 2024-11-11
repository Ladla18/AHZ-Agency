// components/SmashButton.tsx
import React from "react";

const SmashButton: React.FC = () => {


  return (
    <div className=" relative flex md:mt-10 mt-5 flex-col items-center justify-center min-h-screen bg-white p-5">
      <h1 className="md:text-5xl text-3xl md:w-4/6 w-10/12  text-center font-bold text-gray-800">
        I guess all Im trying to say is you should smash the damn button.
      </h1>
      <button
        
        className="mt-5 bg-gray-900 text-white md:text-3xl text-2xl rounded-3xl  md:px-28 md:w-3/4 px-3 py-7 font-semibold hover:bg-gray-800 transition duration-300 ease-in-out"
      >
        Smash the damn button ⚡
      </button>
      <p className="text-sm text-gray-500 mt-2">
        Be quick! Spots are almost gone for September.
      </p>
      <footer className="absolute bottom-5 text-center text-sm  mb-20 text-black">
        © Supafast 2024. All rights reserved.
      </footer>
    </div>
  );
};

export default SmashButton;
