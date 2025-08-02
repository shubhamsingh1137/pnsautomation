import React, { useState } from "react";

const Course_setting = () => {
  const [formData, setFormData] = useState({
    title: "",
    mode: "online",
    duration: "",
    level: "",
    shortDescription: "",
    fullDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // You can add API call here
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Course Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Full Stack Web Development"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mode
          </label>
          <select
            name="mode"
            className="w-full border rounded-lg px-4 py-2"
            value={formData.mode}
            onChange={handleChange}
          >
            <option value="online">Online Training</option>
            <option value="offline">Offline Training</option>
            <option value="hybrid">Hybrid (Online + Offline)</option>
          </select>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              placeholder="e.g. 4 Weeks"
              className="w-full border rounded-lg px-4 py-2"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Level
            </label>
            <select
              name="level"
              className="w-full border rounded-lg px-4 py-2"
              value={formData.level}
              onChange={handleChange}
              required
            >
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short Description
          </label>
          <textarea
            name="shortDescription"
            rows="2"
            placeholder="Brief summary of the course..."
            className="w-full border rounded-lg px-4 py-2"
            value={formData.shortDescription}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Description
          </label>
          <textarea
            name="fullDescription"
            rows="4"
            placeholder="Detailed course overview..."
            className="w-full border rounded-lg px-4 py-2"
            value={formData.fullDescription}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Course_setting;
