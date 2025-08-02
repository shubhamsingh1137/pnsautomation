import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Phone = () => {
  return (
    <div>
      <div className="fixed bottom-120 left-1 ">
        <div className=" bg-gray-500 text-white text-2xl  hover:scale-110 transition-transform p-2 rounded-r-xl cursor-pointer hover:bg-green-600 shadow-2xl shadow-green-800">
          <a href="tel:6393544576" className="flex items-center justify-center">
            <FaPhoneAlt className="text-white text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Phone;
