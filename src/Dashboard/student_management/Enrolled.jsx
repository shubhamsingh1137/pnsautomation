import React, { useState, useEffect } from "react";

const Enrolled_student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("students");
    if (storedData) {
      setStudents(JSON.parse(storedData));
    }
  }, []); // ✅ Only run once on mount

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        ✅ Enrolled Students
      </h2>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-green-100">
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">college</th>
              <th className="py-2 px-4 border-b text-left">course</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.id || index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{student.name}</td>
                  <td className="py-2 px-4 border-b">{student.college}</td>
                  <td className="py-2 px-4 border-b">{student.course}</td>
                  <td className="py-2 px-4 border-b">
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700">
                      Enrolled
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  No One Is Enrolled
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Enrolled_student;
