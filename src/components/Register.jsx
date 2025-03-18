import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "user",
    gender: "",
    address: "",
    image: null,
  });
  const [verifyCode, setVerifyCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://itder.com/api/register",
        formData
      );
      alert(response.data.message);
      setVerifyCode(response.data.verifyCode);
      setIsVerifying(true);
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  const handleOTPVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://itder.com/api/otp-verify-code",
        {
          email: formData.email,
          verify_code: verifyCode,
        }
      );
      alert("Verification successful! Redirecting to login...");
      navigate("/login");
    } catch (error) {
      console.error("OTP verification failed:", error);
      alert("OTP verification failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {isVerifying ? "Verify OTP" : "Register"}
        </h2>

        {!isVerifying ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              className="input"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
              className="input"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              className="input"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input"
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn">
              Register
            </button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleOTPVerify}>
            {/* <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              className="input"
              onChange={(e) => setVerifyCode(e.target.value)}
              required
            /> */}
            <button type="submit" className="btn">
              Confirm Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
