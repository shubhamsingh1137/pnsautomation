import React, { useState } from "react";

const Schsdule_live = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    duration: "",
    platform: "",
    meetingLink: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Scheduled Class:", formData);
    // API call can be placed here
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        📅 Schedule Live Class
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Class Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. React Hooks Deep Dive"
            className="w-full border px-4 py-2 rounded-lg"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              className="w-full border px-4 py-2 rounded-lg"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Time</label>
            <input
              type="time"
              name="time"
              className="w-full border px-4 py-2 rounded-lg"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Duration</label>
            <input
              type="text"
              name="duration"
              placeholder="e.g. 1 hour"
              className="w-full border px-4 py-2 rounded-lg"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Platform</label>
            <select
              name="platform"
              className="w-full border px-4 py-2 rounded-lg"
              value={formData.platform}
              onChange={handleChange}
              required
            >
              <option value="">Select Platform</option>
              <option value="zoom">Zoom</option>
              <option value="google-meet">Google Meet</option>
              <option value="ms-teams">Microsoft Teams</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Meeting Link</label>
          <input
            type="url"
            name="meetingLink"
            placeholder="Paste meeting URL here"
            className="w-full border px-4 py-2 rounded-lg"
            value={formData.meetingLink}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Additional Notes (Optional)
          </label>
          <textarea
            name="notes"
            rows="3"
            placeholder="Class agenda, requirements, etc."
            className="w-full border px-4 py-2 rounded-lg"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Schedule Class
        </button>
      </form>
    </div>
  );
};

export default Schsdule_live;
