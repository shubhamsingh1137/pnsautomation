import React from "react";
import { MdEmail } from "react-icons/md";

const Email = () => {
  return (
    <div>
      <div className="fixed bottom-100 left-1 ">
        <div className=" bg-blue-500 text-white text-2xl  hover:scale-110 transition-transform p-2 rounded-r-xl cursor-pointer hover:bg-green-600 shadow-2xl shadow-green-800">
          <a
            href="https://www.email.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <MdEmail className="text-white text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Email;
