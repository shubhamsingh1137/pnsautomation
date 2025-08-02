import React, { useState } from "react";

const Attendance = () => {
  const [formData, setFormData] = useState({
    student: "",
    date: "",
    status: "",
    remarks: "",
  });

  const students = [
    "Amit Sharma",
    "Pooja Verma",
    "Ravi Kumar",
    "Sneha Singh",
    "Rahul Yadav",
  ]; // Replace with API data if needed

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Attendance submitted:", formData);
    // You can call an API here
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        📋 Mark Attendance
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Select Student
          </label>
          <select
            name="student"
            className="w-full border px-4 py-2 rounded-lg"
            value={formData.student}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose Student --</option>
            {students.map((student, index) => (
              <option key={index} value={student}>
                {student}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            className="w-full border px-4 py-2 rounded-lg"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Attendance Status
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Present"
                checked={formData.status === "Present"}
                onChange={handleChange}
              />
              Present
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Absent"
                checked={formData.status === "Absent"}
                onChange={handleChange}
              />
              Absent
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Remarks (Optional)
          </label>
          <textarea
            name="remarks"
            rows="2"
            placeholder="Any remarks..."
            className="w-full border px-4 py-2 rounded-lg"
            value={formData.remarks}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Attendance
        </button>
      </form>
    </div>
  );
};

export default Attendance;
