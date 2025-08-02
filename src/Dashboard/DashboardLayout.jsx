import React, { useState, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaQuestionCircle, FaSearch } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import Dialoguebox from "./Dialoguebox";
import Helpdialog from "./Helpdialog";
import { FaHome } from "react-icons/fa";
const DashboardLayout = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const adminTimerRef = useRef(null);
  const helpTimerRef = useRef(null);

  const handleAdminEnter = () => {
    clearTimeout(adminTimerRef.current);
    setShowDialog(true);
  };

  const handleAdminLeave = () => {
    adminTimerRef.current = setTimeout(() => {
      setShowDialog(false);
    }, 300);
  };

  const handleHelpEnter = () => {
    clearTimeout(helpTimerRef.current);
    setShowHelp(true);
  };

  const handleHelpLeave = () => {
    helpTimerRef.current = setTimeout(() => {
      setShowHelp(false);
    }, 300);
  };
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - fixed width */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 ml-80 bg-gray-50 min-h-screen ">
        {/* Top navbar */}
        <div className="sticky top-0 z-20 bg-white shadow-md flex items-center justify-between h-14 px-6 rounded-b-xl">
          {/* Right side icons */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="flex items-center bg-gray-200 px-3 py-1 rounded-2xl">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none placeholder:text-gray-400 w-40"
              />
            </div>

            {/* Invite */}
            <p className="bg-blue-100 px-4 py-1 rounded-2xl text-blue-500 ml-100">
              invite a member
            </p>
            <p
              onClick={() => navigate("/")}
              className="bg-blue-100 p-2 rounded-full "
            >
              <FaHome className="text-gray-500" />
            </p>
            {/* PDF Icon */}
            <p className="bg-blue-100 p-2 rounded-full ">
              <FaRegFilePdf className="text-gray-500" />
            </p>

            {/* Help icon with hover */}
            <div
              className="relative"
              onMouseEnter={handleHelpEnter}
              onMouseLeave={handleHelpLeave}
            >
              <p className="bg-blue-100 p-2 rounded-full">
                <FaQuestionCircle className="text-gray-500" />
              </p>
              {showHelp && (
                <div
                  className="absolute right-0 top-full mt-2 z-50"
                  onMouseEnter={handleHelpEnter}
                  onMouseLeave={handleHelpLeave}
                >
                  <Helpdialog />
                </div>
              )}
            </div>

            {/* Admin icon with dropdown */}
            <div
              className="relative"
              onMouseEnter={handleAdminEnter}
              onMouseLeave={handleAdminLeave}
            >
              <div className="bg-blue-100 px-3 py-1 rounded-full flex items-center gap-1">
                <RiAdminFill className="text-gray-500" />
                <FaAngleDown className="text-gray-600" />
              </div>
              {showDialog && (
                <div
                  className="absolute right-0 top-full mt-2 z-50"
                  onMouseEnter={handleAdminEnter}
                  onMouseLeave={handleAdminLeave}
                >
                  <Dialoguebox />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
