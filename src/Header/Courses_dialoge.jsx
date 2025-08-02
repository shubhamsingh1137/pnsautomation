import React from "react";
import { IoArrowRedo } from "react-icons/io5";

const Courses_dialoge = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const hoverEffect =
    "hover:scale-105 transition-transform duration-300 ease-in-out font-semibold hover:bg-blue-400 hover:text-white px-2 py-1 rounded-md";

  const courses = [
    "PLC-SCADA",
    "VFD TRAINING",
    "AUTOCAD",
    "MATLAB",
    "MOTOR STARTER",
    "DCS TRAINING",
    "EMBEDDED SYSTEM",
    "FULL AUTOMATION",
    "SOFTWARE TRAINING",
    "WEB-DEVELOPMENT",
    "MOBILE-DEVELOPMENT",
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-11 ">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-72 max-h-[90vh] ">
        <p className="text-xl font-bold mb-4 underline text-center">
          Available Courses
        </p>
        <div className="space-y-2">
          {courses.map((course, index) => (
            <p
              key={index}
              className={`flex items-center gap-2 cursor-pointer ${hoverEffect}`}
            >
              <IoArrowRedo className="text-blue-500" />
              {course}
            </p>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses_dialoge;
