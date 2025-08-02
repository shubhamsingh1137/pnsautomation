import React from "react";
import video from "../assets/vidios/video1.mp4";

const First = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        src={video}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-800 mb-6  inline-block shadow-2xl px-4 py-2 rounded-lg">
          Welcome to PNS AUTOMATION
        </h1>

        <div className="space-y-4 text-blue-800 text-xl sm:text-2xl font-semibold max-w-3xl">
          <p>
            Electronics is not just circuits, it's the art of making ideas come
            alive.
          </p>
          <p>The spark of innovation begins with understanding electronics.</p>
        </div>
      </div>
    </div>
  );
};

export default First;
