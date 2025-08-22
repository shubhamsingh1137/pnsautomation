import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Courses_dialoge from "./Courses_dialoge";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const [isCourseDialogOpen, setIsCourseDialogOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-black text-white px-6 lg:px-20 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide flex items-center">
          <span className="text-orange-500 mr-1">🟧</span> PNS AUTOMATION
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {/* Dropdowns */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer hover:text-orange-500"
          >
            HOME
          </div>
          <div
            className="flex items-center cursor-pointer hover:text-orange-500"
            onClick={() => setIsCourseDialogOpen(true)}
          >
            COURSES <FaChevronDown className="ml-1 text-xs" />
          </div>
          <div
            onClick={() => navigate("/about")}
            className="flex items-center cursor-pointer hover:text-orange-500"
          >
            ABOUT US
          </div>
          <div
            onClick={() => navigate("/contact")}
            className="flex items-center cursor-pointer hover:text-orange-500"
          >
            CONTACT US
          </div>
          <div
            onClick={() => navigate("/gallery")}
            className="flex items-center cursor-pointer hover:text-orange-500"
          >
            GALLERY
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() =>
              window.open("https://forms.gle/aSxC2XZkXqfygNny8", "_blank")
            }
            className="bg-purple-600 hover:bg-purple-700 transition text-sm font-semibold text-white px-4 py-2 rounded-full"
          >
            Get Started Now →
          </button>
        </div>
      </header>
      <Courses_dialoge
        isOpen={isCourseDialogOpen}
        onClose={() => setIsCourseDialogOpen(false)}
      />
    </>
  );
};

export default Nav;
