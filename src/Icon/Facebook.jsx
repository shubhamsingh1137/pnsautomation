import React from "react";
import { FaFacebook } from "react-icons/fa";

const Facebook = () => {
  return (
    <div>
      <div className="fixed bottom-20 left-1 ">
        <div className="bg-blue-600 p-2 rounded-r-xl cursor-pointer hover:bg-green-800 shadow-2xl shadow-green-800">
          <a
            href="https://www.whatsapp.com" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaFacebook className="text-white text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
