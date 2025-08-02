import React from "react";
import matlabImage from "../assets/images/matlab.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courses = [
  {
    id: 1,
    image: matlabImage,
    title: "Matlab Course",
    isNew: true,
    classes: "18 Classes",
    hours: "60 Hours",
    level: "Professionals",
    mode: "Fully Interactive Online",
    date: "24th August",
    timing: "Weekends (10:00 AM)",
    seatsLeft: "17 seats left",
  },
  {
    id: 2,
    image: matlabImage,
    title: "Matlab Course",
    isNew: true,
    classes: "18 Classes",
    hours: "60 Hours",
    level: "Professionals",
    mode: "Fully Interactive Online",
    date: "24th August",
    timing: "Weekends (10:00 AM)",
    seatsLeft: "17 seats left",
  },
  {
    id: 3,
    image: matlabImage,
    title: "Matlab Course",
    isNew: true,
    classes: "18 Classes",
    hours: "60 Hours",
    level: "Professionals",
    mode: "Fully Interactive Online",
    date: "24th August",
    timing: "Weekends (10:00 AM)",
    seatsLeft: "17 seats left",
  },
  {
    id: 4,
    image: matlabImage,
    title: "Matlab Course",
    isNew: true,
    classes: "18 Classes",
    hours: "60 Hours",
    level: "Professionals",
    mode: "Fully Interactive Online",
    date: "24th August",
    timing: "Weekends (10:00 AM)",
    seatsLeft: "17 seats left",
  },
  {
    id: 5,
    image: matlabImage,
    title: "Matlab Course",
    isNew: true,
    classes: "18 Classes",
    hours: "60 Hours",
    level: "Professionals",
    mode: "Fully Interactive Online",
    date: "24th August",
    timing: "Weekends (10:00 AM)",
    seatsLeft: "17 seats left",
  },
  {
    id: 6,
    image: matlabImage,
    title: "Matlab Course",
    isNew: true,
    classes: "18 Classes",
    hours: "60 Hours",
    level: "Professionals",
    mode: "Fully Interactive Online",
    date: "24th August",
    timing: "Weekends (10:00 AM)",
    seatsLeft: "17 seats left",
  },
];

const Upcomingbatches = () => {
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
    <>
      <div className="p-5 text-black">
        <p className="text-4xl font-extrabold mb-2">Upcoming Batches</p>
        <p className="text-2xl font-semibold">
          "Real stories from real learners — discover how personalized guidance
          helped them achieve their career goals."
        </p>
      </div>

      <Slider {...settings}>
        {courses.map((course) => (
          <div key={course.id} className="p-3">
            <div className="rounded-2xl overflow-hidden shadow-lg border p-4 transition-transform duration-300 hover:scale-105 group bg-white">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="py-4">
                <div className="text-xl font-semibold flex items-center gap-2">
                  {course.title}
                  {course.isNew && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 my-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                    {course.classes}
                  </span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-md text-sm">
                    {course.hours}
                  </span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm">
                    {course.level}
                  </span>
                </div>
                <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                  📍 {course.mode}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  📅 {course.date}
                </p>
                <div className="mt-2">
                  <p className="bg-green-100 text-center py-1 rounded text-green-800 text-sm">
                    {course.timing}
                  </p>
                  <p className="bg-gray-100 text-center py-1 rounded text-gray-700 text-sm mt-1">
                    {course.seatsLeft}
                  </p>
                </div>
              </div>
              <button className="bg-blue-900 text-white w-full py-2 rounded-xl mt-2 hover:bg-blue-800 transition">
                Explore Course
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Upcomingbatches;
