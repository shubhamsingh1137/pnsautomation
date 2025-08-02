import React from "react";
import matlabImg from "../assets/images/matlab.jpg";
import studentImg from "../assets/images/student.jpg";
import image1Img from "../assets/images/image1.jpg";

// Testimonial Data Array
const testimonials = [
  {
    name: "VIKAS BADIGER",
    title: "Founder/CEO – FoB Media Co",
    year: "Passed out in 2015",
    image: matlabImg,
    message:
      "Seshadripuram College gave me the opportunity to work on multiple projects apart from my regular education. Especially the Management Forum and the Sports Committee. The freedom to upskill and the confidence it built helped me in life and my career journey.",
  },
  {
    name: "ANITA VERMA",
    title: "Data Scientist – TechWave",
    year: "Passed out in 2019",
    image: studentImg,
    message:
      "The mentorship and practical exposure I received here transformed the way I learn and think. It empowered me to explore emerging technologies with confidence and clarity.",
  },
  {
    name: "RAHUL SINGH",
    title: "Software Engineer – InfyTech",
    year: "Passed out in 2021",
    image: image1Img,
    message:
      "The personalized support from faculty and the real-world project work helped bridge the gap between academics and industry. I was well-prepared to enter the tech world.",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="p-5 text-black">
        <p className="text-4xl font-extrabold mb-2">Testimonials</p>
        <p className="text-2xl font-semibold">
          "Real stories from real learners — discover how personalized guidance
          helped them achieve their career goals."
        </p>
      </div>

      <div className="max-w-7xl mx-auto p-4 space-y-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row relative"
          >
            {/* Left Side */}
            <div className="bg-gray-200 p-6 flex flex-col items-center justify-center text-center md:w-1/3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h2>
              <p className="text-sm text-yellow-600 mt-1 font-semibold">
                ({testimonial.title})
              </p>
              <p className="text-sm text-yellow-600 font-semibold">
                {testimonial.year}
              </p>
            </div>

            {/* Right Side */}
            <div className="bg-gray-200 p-6 md:w-2/3 text-gray-800">
              <p>{testimonial.message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
