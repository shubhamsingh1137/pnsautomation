import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlinePayment, MdAssignment } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmenuClick = (path) => {
    navigate(path);
  };
  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? "" : key));
  };

  const menu = [
    {
      icon: <PiStudentBold className="text-xl" />,
      title: "Students Management",
      key: "students",
      submenu: [
        { name: "All Students", path: "/dashboard/students/all" },
        { name: "Enrolled", path: "/dashboard/students/enrolled" },
        { name: "Add Student", path: "/dashboard/students/add" },
      ],
    },
    {
      icon: <FaAddressBook className="text-xl" />,
      title: "Course Management",
      key: "courses",
      submenu: [
        { name: "All Courses", path: "/dashboard/courses/all" },
        { name: "Add Course", path: "/dashboard/courses/add" },
        { name: "Course Settings", path: "/dashboard/courses/settings" },
      ],
    },
    {
      icon: <SiGoogleclassroom className="text-xl" />,
      title: "Live / Recorded Classes",
      key: "classes",
      submenu: [
        { name: "Schedule Live", path: "/dashboard/classes/schedule" },
        { name: "Upload Video", path: "/dashboard/classes/upload" },
        { name: "Join Links", path: "/dashboard/classes/join-links" },
        { name: "Attendance", path: "/dashboard/classes/attendance" },
      ],
    },
    {
      icon: <MdOutlinePayment className="text-xl" />,
      title: "Payments",
      key: "payments",
      submenu: [
        { name: "All Payments", path: "/dashboard/payments/all" },
        { name: "Pending", path: "/dashboard/payments/pending" },
        { name: "Refunds", path: "/dashboard/payments/refunds" },
        { name: "Reports", path: "/dashboard/payments/reports" },
      ],
    },
    {
      icon: <MdAssignment className="text-xl" />,
      title: "Assignments & Tests",
      key: "assignments",
      submenu: [
        { name: "Upload Assignment", path: "/dashboard/assignments/upload" },
        {
          name: "Student Submissions",
          path: "/dashboard/assignments/submissions",
        },
        { name: "Create Quiz", path: "/dashboard/assignments/quiz" },
      ],
    },
    {
      icon: <VscFeedback className="text-xl" />,
      title: "Reviews",
      key: "feedback",
      submenu: [
        { name: "All Feedback", path: "/dashboard/reviews/all" },
        { name: "Ratings", path: "/dashboard/reviews/ratings" },
        { name: "Moderation", path: "/dashboard/reviews/moderation" },
      ],
    },
    {
      icon: <IoNotifications className="text-xl" />,
      title: "Notifications / Announcements",
      key: "notifications",
      submenu: [
        {
          name: "Send Notifications to All",
          path: "/dashboard/notifications/send",
        },
        { name: "Email Integration", path: "/dashboard/notifications/email" },
      ],
    },
    {
      icon: <IoIosSettings className="text-xl" />,
      title: "Settings",
      key: "settings",
      submenu: [
        { name: "Profile Settings", path: "/dashboard/settings/profile" },
        { name: "Admin Password Change", path: "/dashboard/settings/password" },
        {
          name: "Enable Maintenance Mode",
          path: "/dashboard/settings/maintenance",
        },
      ],
    },
    {
      icon: <FaHandsHelping className="text-xl" />,
      title: "Help",
      key: "help",
      submenu: [
        { name: "Chat with Students", path: "/dashboard/help/chat" },
        { name: "FAQ Management", path: "/dashboard/help/faq" },
      ],
    },
  ];

  return (
    <div className="w-80 h-screen bg-gray-100 p-4 shadow-lg overflow-y-auto fixed ">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide flex items-center mb-6">
        <span className="text-orange-500 mr-2">🟧</span> PNS AUTOMATION
      </div>
      {/* Menu Items */}
      <ul className="space-y-1">
        {menu.map((item, index) => (
          <li key={index}>
            <div
              onClick={() => item.submenu && toggleDropdown(item.key)}
              className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-200 cursor-pointer"
            >
              <div className="flex items-center gap-3 text-gray-800">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {item.submenu && (
                <span className="text-sm text-gray-600">
                  {openDropdown === item.key ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              )}
            </div>

            {/* Submenu */}
            {openDropdown === item.key && item.submenu && (
              <ul className="ml-10 mt-1 space-y-1 text-sm text-gray-700">
                {item.submenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={() => handleSubmenuClick(subItem.path)}
                    className={`cursor-pointer px-4 py-2 rounded-md transition-colors duration-300
      ${
        location.pathname === subItem.path
          ? "bg-gray-300  text-gray-800"
          : "hover:bg-gray-300 text-gray-800"
      }
    `}
                  >
                    {subItem.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
