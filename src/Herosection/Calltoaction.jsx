import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-4 md:px-16 lg:px-32 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Start Your Online Learning Journey Today!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join thousands of learners and book your free demo class now. No
          commitments, just pure skill-building.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="font-extrabold text-4xl text-shadow-black">
            FOR ENQUIRY CALL:
          </p>
          <p className="font-extrabold text-4xl text-shadow-black">
            8419003734
          </p>
        </div>
        <div className="space-x-5 mt-5">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition duration-200">
            Join Now
          </button>

          <button className="border-2 border-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 transition duration-200">
            Book Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
