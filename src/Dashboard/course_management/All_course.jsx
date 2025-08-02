import React from "react";
import autocadImg from "../../assets/images/autocad.jpg";
import dcsImage from "../../assets/images/dcs.jpg";
import embeddedImage from "../../assets/images/embedded.jpg";
import matlabImage from "../../assets/images/matlab.jpg";
import mobileappImage from "../../assets/images/mobileapp.jpg";
import starterImage from "../../assets/images/motor_starter.jpg";
import vfdImage from "../../assets/images/vfd1.jpg";
import webImage from "../../assets/images/web.jpg";

const courses = [
  {
    id: 1,
    title: "Complete plc & scada Training",
    image:
      "https://media.gettyimages.com/id/616982358/photo/new-control-panel-wiring.jpg?s=612x612&w=0&k=20&c=Z2AsdS_mZ48Gw1LLAUd_54CEgjXJopRnAlyAo_jgVfQ=",
  },
  { id: 2, title: "Complete VFD Training", image: vfdImage },
  { id: 3, title: "Complete AUTOCAD Training", image: autocadImg },
  { id: 4, title: "Complete MATLAB Training", image: matlabImage },
  { id: 5, title: "Complete MOTOR STARTER Training", image: starterImage },
  { id: 6, title: "Complete DCS TRAINING Training", image: dcsImage },
  { id: 7, title: "Complete EMBEDDED SYSTEM Training", image: embeddedImage },
  { id: 8, title: "Complete WEB-DEVELOPMENT Training", image: webImage },
  {
    id: 9,
    title: "Complete MOBILE-APP-DEVELOPMENT Training",
    image: mobileappImage,
  },
];

const All_course = () => {
  return (
    <div className="">
      {" "}
      <section className="px-4 py-10 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 w-full lg:w-[100%]  rounded-2xl">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
          All Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gradient-to-r from-white via-purple-100 to-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[calc(100%-8rem)]">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                  {course.title}
                </h3>
                <button className="mt-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:from-pink-600 hover:to-yellow-500 transition-all">
                  See more...
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default All_course;
