import React, { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";

const Add_course = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [benefits, setBenefits] = useState("");
  const [requirements, setRequirements] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-200 rounded-2xl text-black py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Add Course
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Course Title"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full p-3 bg-gray-400 rounded-lg outline-none placeholder:text-gray-800 placeholder:font-semibold"
          />

          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 bg-gray-400 rounded-lg outline-none  placeholder:text-gray-800 placeholder:font-semibold"
            rows={3}
          />

          <input
            type="number"
            placeholder="Enter Course Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 bg-gray-400 rounded-lg outline-none  placeholder:text-gray-800 placeholder:font-semibold"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 bg-gray-400 rounded-lg outline-none text-gray-800 font-semibold  placeholder:text-gray-800 placeholder:font-semibold"
          >
            <option value="">Choose a Category</option>
            <option value="web">Web Development</option>
            <option value="design">UI/UX Design</option>
            <option value="ml">Machine Learning</option>
          </select>

          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-3 bg-gray-400 rounded-lg outline-none  placeholder:text-gray-800 placeholder:font-semibold"
          />

          {/* Image upload */}
          <div className="border border-dashed border-gray-500 p-6 rounded-lg text-center">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="mx-auto h-32 object-cover rounded"
              />
            ) : (
              <>
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer flex flex-col items-center justify-center space-y-2 text-gray-800"
                >
                  <FaUpload size={24} />
                  <span>Drag and drop an image, or click to browse</span>
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <p className="text-xs mt-2">
                  Aspect ratio 16:9 • Max 5MB • Recommended size: 1920x1080
                </p>
              </>
            )}
          </div>

          <textarea
            placeholder="Enter Benefits of the course"
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
            className="w-full p-3 bg-gray-400 rounded-lg outline-none  placeholder:text-gray-800 placeholder:font-semibold"
            rows={2}
          />

          <textarea
            placeholder="Requirements/Instructions"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className="w-full p-3 bg-gray-400 rounded-lg outline-none  placeholder:text-gray-800 placeholder:font-semibold"
            rows={2}
          />

          <button
            type="submit"
            className="bg-yellow-500 text-black w-full py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_course;
