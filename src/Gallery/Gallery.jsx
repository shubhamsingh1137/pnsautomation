import React from "react";
import galleryElectrical from "../assets/images/galleryelectrical.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="relative w-full h-[90vh]">
        <img
          src={galleryElectrical}
          alt="contact us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Gallery
          </h1>
        </div>
        coming soon!
      </div>
    </div>
  );
};

export default Gallery;
