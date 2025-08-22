import React from "react";
import solarImage from "../assets/images/solar.jpg";
import automationImage from "../assets/images/automation.jpg";
import medicalImage from "../assets/images/medical.jpg";
import trainingImage from "../assets/images/training.jpg";

const Second = () => {
  return (
    <section className="px-6 py-10 bg-white text-gray-800">
      <div className="container mx-auto max-w-7xl ">
        {/* Main Title */}
        <h2 className="text-4xl font-extrabold mb-10 ">
          The Technology We Work
        </h2>

        {/* Services Grid (All 4 items are now inside this grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Solar Installation */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src={solarImage}
              alt="Solar panels on a roof"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Solar Installation</h3>
            <p className="text-gray-600">
              We provide professional solar panel installation services to help
              you harness clean, renewable energy for your home or business.
            </p>
          </div>

          {/* Home Automation */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src={automationImage}
              alt="Smart home automation"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">
              Home Automation Installation
            </h3>
            <p className="text-gray-600">
              Transform your living space into a smart home with our expert
              automation services, making your life more convenient and secure.
            </p>
          </div>

          {/* Medical Device Manufacturing */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src={medicalImage}
              alt="Medical device"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">
              Medical Devices Manufacturing
            </h3>
            <p className="text-gray-600">
              We specialize in the manufacturing of high-quality, reliable
              medical devices that meet strict industry standards to serve
              healthcare needs.
            </p>
          </div>

          {/* Training Section - Moved into the main grid container */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src={trainingImage}
              alt="training"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Training</h3>
            <p className="text-gray-600">
              Beyond products, we offer comprehensive training programs to
              empower professionals and enthusiasts in the fields of home
              automation, medical devices, and electronics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
