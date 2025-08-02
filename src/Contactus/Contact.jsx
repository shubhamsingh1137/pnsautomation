import React from "react";
import contactUsImage from "../assets/images/contactus.jpg";
import Formcontact from "./Formcontact";
import Whatapps from "../Icon/Whatapp";
import CallToAction from "../Herosection/Calltoaction";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[90vh]">
        <img
          src={contactUsImage}
          alt="contact us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Form + Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-8 py-12 bg-gray-50">
        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Got a question? Reach out to us!
          </h2>
          <Formcontact />
        </div>

        {/* Embedded Google Map */}
        <div className="rounded-lg overflow-hidden shadow-xl h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.073388210463!2d77.2000147!3d28.711352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0277e2a07e81%3A0x15b3c5f3d27a2137!2sDrishti%20IAS!5e0!3m2!1sen!2sin!4v1700000000000"
            title="Drishti IAS Map"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default Contact;
