import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

// ✅ Yup Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  college: yup.string().required("College is required"),
  course: yup.string().required("Course is required"),
  status: yup
    .string()
    .oneOf(["Enrolled", "Pending"], "Choose valid status")
    .required("Status is required"),
});

const Add_student = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const existing = JSON.parse(localStorage.getItem("students")) || [];
    const updated = [...existing, { id: Date.now(), ...data }];
    localStorage.setItem("students", JSON.stringify(updated));
    toast.success("🎉 Student added successfully!");
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Add Student
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
        {/* Step-like Header */}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-800 mb-1 font-bold">Name</label>
            <input
              {...register("name")}
              className="w-full px-4 py-2 rounded-md bg-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder:text-gray-800 placeholder:text-semibold"
              placeholder="Enter Full Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* College */}
          <div>
            <label className="block text-gray-800 mb-1 font-bold">
              College
            </label>
            <input
              {...register("college")}
              className="w-full px-4 py-2 rounded-md bg-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder:text-gray-800 placeholder:text-semibold"
              placeholder="Enter college name"
            />
            {errors.college && (
              <p className="text-red-500 text-sm mt-1">
                {errors.college.message}
              </p>
            )}
          </div>

          {/* Course */}
          <div>
            <label className="block text-gray-800 mb-1 font-bold">Course</label>
            <input
              {...register("course")}
              className="w-full px-4 py-2 rounded-md bg-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder:text-gray-800 placeholder:text-semibold"
              placeholder="Enter course name"
            />
            {errors.course && (
              <p className="text-red-500 text-sm mt-1">
                {errors.course.message}
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block mb-1 text-gray-800 font-bold">Status</label>
            <select
              {...register("status")}
              className="w-full px-4 py-2 rounded-md bg-gray-400 text-gray-800  placeholder:text-gray-800 placeholder:text-semibold"
            >
              <option value="">-- Select Status --</option>
              <option value="Enrolled">Enrolled</option>
              <option value="Pending">Pending</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">
                {errors.status.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-10 py-2 rounded-lg transition-all duration-300"
            >
              Submit →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_student;
