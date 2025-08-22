import React from "react";
import { FaFacebook } from "react-icons/fa";

const Facebook = () => {
  return (
    <div>
      <div className="fixed bottom-40 right-1 ">
        <div className="bg-blue-600 p-2 rounded-l-xl cursor-pointer hover:bg-green-800 shadow-2xl shadow-green-800">
          <a
            href="https://www.facebook.com/pnsautomation/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaFacebook className="text-white text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
