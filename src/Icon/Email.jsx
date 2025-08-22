import React from "react";
import { MdEmail } from "react-icons/md";

const Email = () => {
  return (
    <div>
      <div className="fixed bottom-100 right-1 ">
        <div className=" bg-blue-500 text-white text-xl  hover:scale-110 transition-transform p-2 rounded-l-xl cursor-pointer hover:bg-green-600 shadow-2xl shadow-green-800">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhamsingh1137@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <MdEmail className="text-white text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Email;
