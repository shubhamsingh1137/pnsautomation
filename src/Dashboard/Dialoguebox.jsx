import React from "react";

const Dialoguebox = () => {
  return (
    <div className="absolute right-0 mt-2 w-40 rounded-xl shadow-2xl bg-white  z-50">
      <div className="py-2 text-sm text-gray-700">
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Personal Settings
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Team Management
        </a>
        <a href="#" className="block px-4 py-2 text-red-600 hover:bg-red-100">
          Logout
        </a>
      </div>
    </div>
  );
};

export default Dialoguebox;
