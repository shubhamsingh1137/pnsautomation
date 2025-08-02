import React from "react";

const Formcontact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1117] text-white px-4 rounded-2xl">
      <div className="max-w-3xl w-full bg-[#0D1117] border border-gray-700 p-8 rounded-lg shadow-md mt-5">
        <h2 className="text-3xl font-bold mb-1">
          Got an Idea? We've got the skills.
        </h2>
        <h3 className="text-2xl font-bold mb-4">Let's team up</h3>
        <p className="text-gray-400 mb-6">
          Tell us more about yourself and what you’ve got in mind.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter first name"
              className="bg-[#161B22] text-white border border-gray-600 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Enter last name"
              className="bg-[#161B22] text-white border border-gray-600 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>

          <input
            type="email"
            placeholder="Enter email address"
            className="bg-[#161B22] text-white border border-gray-600 rounded px-4 py-3 w-full focus:outline-none focus:ring focus:ring-yellow-400"
          />

          <div className="flex gap-2">
            <select className="bg-[#161B22] text-white border border-gray-600 rounded px-3 py-3 focus:outline-none">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="tel"
              placeholder="12345 67890"
              className="flex-1 bg-[#161B22] text-white border border-gray-600 rounded px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Enter your message here"
            className="bg-[#161B22] text-white border border-gray-600 rounded px-4 py-3 w-full resize-none focus:outline-none focus:ring focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formcontact;
