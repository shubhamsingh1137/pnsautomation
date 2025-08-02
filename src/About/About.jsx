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
import Upcomingbatches from "../Herosection/Upcomingbatches";
import CallToAction from "../Herosection/Calltoaction";

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
        <div className="max-w-7xl mx-auto px-4 py-10 text-gray-800 space-y-10 text-center">
          <h2 className="text-4xl font-bold text-blue-900 underline ">
            Empowering Engineers with Practical Skills for the Future
          </h2>

          <p className="leading-relaxed text-xl text-gray-800">
            At{" "}
            <span className="font-semibold text-blue-700">PNS Automation</span>,
            we believe that real success comes from the perfect blend of theory
            and hands-on practice. With years of experience in industrial
            automation and technical training, we are dedicated to bridging the
            gap between education and employability.
          </p>

          <div className="flex flex-col gap-8">
            {trainings.map((item) => (
              <div
                key={item.id}
                className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl md:text-5xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-4xl font-bold text-blue-900 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-800 leading-relaxed text-xl">
              To provide affordable, accessible, and high-quality technical
              training to students, freshers, and professionals—equipping them
              with the skills required to thrive in real-world engineering
              environments.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-4xl font-bold text-blue-900 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-800 leading-relaxed text-xl">
              To become India’s most trusted name in practical technical
              education, building the next generation of automation engineers,
              innovators, and developers.
            </p>
          </div>
        </div>
      </div>
      <Upcomingbatches />
    </>
  );
};

export default About;
