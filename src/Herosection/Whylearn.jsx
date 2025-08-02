import React from "react";
import whywe from "../assets/images/whywe.jpg";
const Whylearn = () => {
  return (
    <>
      <div className="p-5 text-black">
        <p className="text-4xl font-extrabold mb-2 ">Why learn with us</p>
        <p className="text-2xl font-semibold ">
          Learning People provide a personalised learning experience to suit
          your past experience and future career goals.
        </p>
      </div>{" "}
      <div className="min-h-screen bg-gray-50 font-sans realtive">
        <section className="bg-[#222] text-white rounded-3xl p-8 md:p-16 mx-4 md:mx-auto max-w-7xl mt-8 shadow-xl">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-4">
                Flexible pathways. <br />
                Fulfilling careers.
              </h1>
            </div>

            <div className="lg:w-1/2">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Our dedicated team of experts are here to nurture your
                aspirations and guide you on your learning journey, where your
                individual goals and needs are at the forefront. Whether you're
                starting as a novice or seeking to advance as an expert, we'll
                be by your side every step of the way to help you.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2 h-50 flex mt-20 justify-center md:justify-start absolute">
              <div className="bg-white text-black rounded-2xl p-6 w-full max-w-md  relative overflow-hidden">
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-blue-50">
                  <img
                    src={whywe}
                    alt="Decorative line art"
                    className="w-full h-full object-cover "
                  />

                  <div className="absolute inset-0 flex items-center justify-center  rounded-xl"></div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex lg:ml-150">
              <button className="bg-orange-400 hover:bg-orange-500 text-[#222] font-semibold px-8 py-4 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 10.5a8.38 8.38 0 01-.9 3.8c-.6 1.2-1.5 2.3-2.6 3.2a11.36 11.36 0 01-4.7 1.9 8.88 8.88 0 01-5.3-1.4A10.6 10.6 0 014 15.2c-.3-.9-.5-1.8-.5-2.7 0-2.2 1-4.2 2.6-5.8A8.88 8.88 0 0112 4.5c2.2 0 4.2 1 5.8 2.6 1.6 1.6 2.5 3.6 2.5 5.4z"
                  />
                </svg>
                Get in touch
              </button>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl mt-15 p-8 md:p-16 mx-4 md:mx-auto max-w-7xl  mb-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                50,000+ learning assets
              </h3>
              <p className="text-gray-600">
                Explore our expansive training library to build your unique
                learning pathway.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                40,000+ students
              </h3>
              <p className="text-gray-600">
                We've helped over 40,000 students to upskill and make positive
                changes to their careers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Career support & job opportunities
              </h3>
              <p className="text-gray-600">
                Our three-phase Career Services process has a 97% success rate
                in securing students new roles. Plus, with Leap Careers, you'll
                gain access to exclusive{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  job opportunities
                </a>{" "}
                from our employer network.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Whylearn;
