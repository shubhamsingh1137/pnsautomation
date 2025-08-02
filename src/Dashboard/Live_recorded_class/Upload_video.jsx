import React, { useState } from "react";

const Upload_video = () => {
  const [formData, setFormData] = useState({
    title: "",
    module: "",
    description: "",
    video: null,
    thumbnail: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploading:", formData);
    // API call for video upload can be added here
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        🎥 Upload Training Video
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Video Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. JavaScript Arrays Explained"
            className="w-full border px-4 py-2 rounded-lg"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Module / Week
          </label>
          <input
            type="text"
            name="module"
            placeholder="e.g. Week 3 - Arrays"
            className="w-full border px-4 py-2 rounded-lg"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Video File
          </label>
          <input
            type="file"
            name="video"
            accept="video/*"
            className="w-full border px-4 py-2 rounded-lg bg-gray-50"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Thumbnail (Optional)
          </label>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            className="w-full border px-4 py-2 rounded-lg bg-gray-50"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows="3"
            placeholder="What this video covers..."
            className="w-full border px-4 py-2 rounded-lg"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Upload Video
        </button>
      </form>
    </div>
  );
};

export default Upload_video;
