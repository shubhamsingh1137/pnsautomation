import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

const Twitter = () => {
  return (
    <div>
      <div className="fixed bottom-60 left-1 ">
        <div className="bg-black p-2 rounded-r-xl cursor-pointer hover:bg-gray-800 shadow-2xl shadow-green-800">
          <a
            href="https://twitter.com/YourTwitterHandle" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaSquareXTwitter className="text-white text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
