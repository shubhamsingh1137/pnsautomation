import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import autocadImage from "../assets/images/autocad.jpg";
import dcsImage from "../assets/images/dcs.jpg";
import embeddedImage from "../assets/images/embedded.jpg";
import matlabImage from "../assets/images/matlab.jpg";
import mobileappImage from "../assets/images/mobileapp.jpg";
import starterImage from "../assets/images/motor_starter.jpg";
import vfdImage from "../assets/images/vfd1.jpg";
import webImage from "../assets/images/web.jpg";
import solarImage from "../assets/images/solar.jpg";
import automationImage from "../assets/images/automation.jpg";
import medicalImage from "../assets/images/medical.jpg";
const courses = [
  {
    id: 1,
    title: "Complete plc & scada Training",
    image:
      "https://media.gettyimages.com/id/616982358/photo/new-control-panel-wiring.jpg?s=612x612&w=0&k=20&c=Z2AsdS_mZ48Gw1LLAUd_54CEgjXJopRnAlyAo_jgVfQ=",
  },
  {
    id: 2,
    title: "Complete VFD Training",
    image: vfdImage,
  },
  {
    id: 3,
    title: "Complete AUTOCAD Training",
    image: autocadImage,
  },
  {
    id: 4,
    title: "Complete MATLAB Training",
    image: matlabImage,
  },
  {
    id: 5,
    title: "Complete MOTOR STARTER Training",
    image: starterImage,
  },
  {
    id: 6,
    title: "Complete DCS TRAINING Training",
    image: dcsImage,
  },
  {
    id: 7,
    title: "Complete EMBEDDED SYSTEM Training",
    image: embeddedImage,
  },
  {
    id: 8,
    title: "Complete WEB-DEVELOPMENT Training",
    image: webImage,
  },
  {
    id: 9,
    title: "Complete MOBILE-APP-DEVELOPMENT Training",
    image: mobileappImage,
  },
  {
    id: 10,
    title: "Solar Installation",
    image: solarImage,
  },
  {
    id: 11,
    title: "Home Automation Installation",
    image: automationImage,
  },
  {
    id: 12,
    title: "Medical Devices manufacturing",
    image: medicalImage,
  },
];

const Third = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-4xl font-extrabold mb-10 ">Featured Courses</h2>

      <Slider {...settings}>
        {courses.map((course) => (
          <div key={course.id} className="px-2">
            <div className="bg-white shadow-md border border-gray-200 rounded-md overflow-hidden flex flex-col items-center">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-black mb-2">
                  {course.title}
                </h3>
                <button className="w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 transition">
                  See more...
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Third;
