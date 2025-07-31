import React from "react";
import img from "../assets/Ring.png";

export default function Loader() {
  return (
    <>
      <style>
        {`
          @keyframes spinSmooth {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .spin-smooth {
            animation: spinSmooth 3s linear infinite;
          }
        `}
      </style>

      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="w-36 h-36 rounded-full overflow-hidden">
          <img
            src={img}
            alt="Loading..."
            className="w-full h-full object-cover spin-smooth"
          />
        </div>
      </div>
    </>
  );
}
