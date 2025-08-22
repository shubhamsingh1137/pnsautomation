import React from "react";
import aboutImage from "../assets/images/about2.jpg";
import plcScadaImage from "../assets/images/plc-scada1.jpg";
import VFD3 from "../assets/images/VFD3.jpg";
import autocad from "../assets/images/autocad.jpg";
import matlab from "../assets/images/matlab.jpg";
import motorStarterImage from "../assets/images/motor_starter.jpg";
import dcs from "../assets/images/dcs.jpg";
import embedded from "../assets/images/embedded.jpg";
import mobileapp from "../assets/images/mobileapp.jpg";
import web from "../assets/images/web.jpg";
import solarImage from "../assets/images/solar.jpg";
import automationImage from "../assets/images/automation.jpg";
import medicalImage from "../assets/images/medical.jpg";
import trainingImage from "../assets/images/training.jpg";
import Upcomingbatches from "../Herosection/Upcomingbatches";
import CallToAction from "../Herosection/Calltoaction";

// Data for the "Our Expertise" section
const expertise = [
  {
    id: 1,
    title: "Home Automation",
    image: automationImage,
    description:
      "We enhance your life from home to health. Our Home Automation solutions create smart, secure, and comfortable living spaces.",
  },
  {
    id: 2,
    title: "Medical Device Manufacturing",
    image: medicalImage,
    description:
      "Our expertise extends to Medical Device Manufacturing, where we develop and produce high-quality, reliable, and life-saving equipment.",
  },
  {
    id: 3,
    title: "Solar Solutions",
    image: solarImage,
    description:
      "Clean energy is the future, and we are committed to it. Our Solar Solutions not only reduce energy costs but also contribute to a greener planet.",
  },
  {
    id: 4,
    title: "Training Programs",
    image: trainingImage,
    description:
      "Beyond products, our Training Programs empower the next generation of innovators with a deep understanding of cutting-edge technology.",
  },
];

// Data for the "Our Trainings" section
const trainings = [
  {
    id: 1,
    title: "PLC-SCADA",
    image: plcScadaImage,
  },
  {
    id: 2,
    title: "VFD",
    image: VFD3,
  },
  {
    id: 3,
    title: "AUTOCAD",
    image: autocad,
  },
  {
    id: 4,
    title: "MATLAB",
    image: matlab,
  },
  {
    id: 5,
    title: "MOTOR-STARTER",
    image: motorStarterImage,
  },
  {
    id: 6,
    title: "DCS",
    image: dcs,
  },
  {
    id: 7,
    title: "EMBEDDED SYSTEM",
    image: embedded,
  },
  {
    id: 8,
    title: "MOBILE APP DEVELOPER",
    image: mobileapp,
  },
  {
    id: 9,
    title: "WEBSITE DEVELOPER",
    image: web,
  },
];

const About = () => {
  return (
    <>
      <div className="relative">
        {/* Banner Image with Heading */}
        <div className="relative w-full h-full">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-[90vh] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
              About Us PNS Automation
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-10 text-gray-800 text-center">
          {/* Main About Us Section */}
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At **PNS Automation**, we don't just work with circuits and code;
              we engineer the future. We are dedicated to integrating technology
              into everyday life to drive progress in every field. Our vision is
              to create a world where technology empowers individuals,
              transforms homes into smart living spaces, and safeguards our
              health and planet.
            </p>
          </div>

          {/* Our Expertise Grid Section */}
          <div className="my-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-gray-900">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Trainings Grid Section */}
          <div className="my-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-gray-900">
              Our Training Programs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {trainings.map((item) => (
                <div
                  key={item.id}
                  className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:bg-black/70 transition">
                    <h3 className="text-white text-3xl md:text-4xl font-bold text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission and Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 text-left">
            {/* Mission */}
            <div className="p-6 bg-blue-50 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-blue-800 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide affordable, accessible, and high-quality technical
                training to students, freshers, and professionals—equipping them
                with the skills required to thrive in real-world engineering
                environments.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 bg-green-50 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-green-800 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become India’s most trusted name in practical technical
                education, building the next generation of automation engineers,
                innovators, and developers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Upcomingbatches />
      <CallToAction />
    </>
  );
};

export default About;
