import React from "react";
import studentImg from "../assets/images/student.jpg";
import image1 from "../assets/images/image1.jpg";
import career from "../assets/images/career.jpg";
import career_success from "../assets/images/career_success.jpg";
import best from "../assets/images/best.jpg";

const Benefitfrom = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          What you will benefit from
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg flex flex-row items-center justify-between text-left">
            {/* Left Side - Text */}
            <div className="w-2/3 pr-4">
              <h3 className="text-xl font-semibold mb-3">
                Best-in-class training
              </h3>
              <p className="text-base leading-relaxed">
                We partner with the world's top training providers, so you have
                a rich and engaging learning experience. Join live classrooms,
                complete interactive practice labs, or catch up with on-demand
                lectures. Whatever your learning style – we’ve got you covered.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="w-1/3 flex justify-end">
              <img
                src={best}
                alt="Training Illustration"
                className="w-32 h-auto object-contain"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg flex flex-row justify-between items-center">
            <div className="w-2/3 pr-4">
              <h3 className="text-xl font-semibold mb-3">
                Supporting you the entire way
              </h3>
              <p className="text-base leading-relaxed">
                Don’t feel alone on your journey to success. You can count on
                dedicated support from our StudentCare™ team. We understand the
                ups and downs of online learning and will be there if you need
                support.
              </p>
            </div>
            <div className="w-1/3 flex justify-end">
              <img
                src={image1}
                alt="Support Illustration"
                className="w-32 h-auto object-contain"
              />
            </div>
          </div>
          {/* card3 */}
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg flex flex-row justify-between items-center">
            <div className="w-2/3 pr-4">
              <h3 className="text-xl font-semibold mb-3">Career experts</h3>
              <p className="text-base leading-relaxed">
                Navigating a career change can be complex, so we keep up to date
                with industry changes, emerging technologies, and best practices
                to provide you with everything you need to excel in your career.
                Navigating a career change can be complex – but using their
                industry knowledge, our Career Consultants help you choose the
                training pathway you need, for the career you want.
              </p>
            </div>
            <div className="w-1/3 flex justify-end">
              <img
                src={career}
                alt="Support Illustration"
                className="w-32 h-auto object-contain"
              />
            </div>
          </div>
          {/* card4 */}
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg flex flex-row justify-between items-center">
            <div className="w-2/3 pr-4">
              <h3 className="text-xl font-semibold mb-3">Career success</h3>
              <p className="text-base leading-relaxed">
                Learning People's career pathways are designed for success. Our
                Career Services team will guide you through our three-phase
                process. With a 98% employment success rate, we’re confident
                that we’ll get you where you want to go next in your career.
              </p>
            </div>
            <div className="w-1/3 flex justify-end">
              <img
                src={career_success}
                alt="Support Illustration"
                className="w-32 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefitfrom;
