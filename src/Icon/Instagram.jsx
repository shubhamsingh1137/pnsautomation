import React from "react";
import { FaInstagramSquare } from "react-icons/fa";

const Instagram = () => {
  return (
    <div>
      <div className="fixed bottom-80 left-1 ">
        <div className=" bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white text-2xl  hover:scale-110 transition-transform p-2 rounded-r-xl cursor-pointer hover:bg-green-600 shadow-2xl shadow-green-800">
          <a
            href="https://www.whatsapp.com" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaInstagramSquare className="text-white text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
