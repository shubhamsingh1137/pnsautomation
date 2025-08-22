import React from "react";
import { FaInstagramSquare } from "react-icons/fa";

const Instagram = () => {
  return (
    <div>
      <div className="fixed bottom-85 right-1 ">
        <div className=" bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white text-2xl  hover:scale-110 transition-transform p-2 rounded-l-xl cursor-pointer hover:bg-green-600 shadow-2xl shadow-green-800">
          <a
            href="https://www.instagram.com/pnsautomation/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaInstagramSquare className="text-white text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
