import React, { useState } from "react";

const Join_link = () => {
  const [formData, setFormData] = useState({
    title: "",
    platform: "",
    joinLink: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Join Link Data:", formData);
    // Add API call here to submit join link
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        🔗 Add Join Link
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Class Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. React Intro Session"
            className="w-full border px-4 py-2 rounded-lg"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Platform
          </label>
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
            <option value="microsoft-teams">Microsoft Teams</option>
            <option value="webex">WebEx</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Join Link
          </label>
          <input
            type="url"
            name="joinLink"
            placeholder="e.g. https://meet.google.com/xyz-abc-def"
            className="w-full border px-4 py-2 rounded-lg"
            value={formData.joinLink}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Notes (Optional)
          </label>
          <textarea
            name="notes"
            rows="3"
            placeholder="Any special instructions or topics to be covered"
            className="w-full border px-4 py-2 rounded-lg"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Submit Join Link
        </button>
      </form>
    </div>
  );
};

export default Join_link;
