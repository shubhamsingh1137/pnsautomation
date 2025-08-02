import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [step, setStep] = useState("login");
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginAPI = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login/", {
        email,
        password,
      });
      toast.success("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login Failed");
    }
  };

  const requestOTP = async () => {
    try {
      await axios.post("http://localhost:8000/send-otp/", { email });
      toast.success("OTP sent to email");
      setStep("verify");
    } catch (error) {
      toast.error("Failed to send OTP");
    }
  };

  const verifyOTPAndResetPassword = async () => {
    try {
      await axios.post("http://localhost:8000/forgot-password/", {
        email,
        otp,
        new_password: newPassword,
      });
      toast.success("Password reset successful");
      setStep("login");
    } catch (error) {
      toast.error("Invalid OTP or something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-800 px-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold underline">
            {step === "login"
              ? "Login"
              : step === "signup"
              ? "Signup"
              : step === "forgot"
              ? "Forgot Password"
              : "Reset Password"}
          </h2>
        </div>

        {step === "login" && (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <p
              className="text-blue-400 font-semibold cursor-pointer"
              onClick={() => setStep("forgot")}
            >
              Forgot Password?
            </p>
            <button
              onClick={loginAPI}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
            <p className="text-center">
              Not a member?{" "}
              <span
                onClick={() => setStep("signup")}
                className="text-blue-600 font-semibold cursor-pointer"
              >
                Signup now
              </span>
            </p>
          </div>
        )}

        {step === "signup" && (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Signup
            </button>
            <p
              onClick={() => setStep("login")}
              className="text-blue-600 font-semibold cursor-pointer text-center"
            >
              Already have an account? Login
            </p>
          </div>
        )}

        {step === "forgot" && (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <button
              onClick={requestOTP}
              className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
            >
              Send OTP
            </button>
            <p
              onClick={() => setStep("login")}
              className="text-blue-600 font-semibold cursor-pointer text-center"
            >
              Back to Login
            </p>
          </div>
        )}

        {step === "verify" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <button
              onClick={verifyOTPAndResetPassword}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
