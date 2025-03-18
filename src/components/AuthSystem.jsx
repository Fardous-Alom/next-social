import { useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://itder.com/api";

export default function AuthSystem() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    password_confirmation: "",
    role: "user",
    gender: "male",
    address: "",
  });
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, form);
      const verifyCode = response.data.verifyCode;
      await axios.post(`${API_BASE_URL}/otp-verify-code`, {
        email: form.email,
        verify_code: verifyCode,
      });
      alert("Registration successful! You can now log in.");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, loginForm);
      localStorage.setItem("token", response.data.access_token);
      setUser(response.data.userData);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {!user ? (
        <div className="space-y-6">
          <form
            onSubmit={handleRegister}
            className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold">Register</h2>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border p-2 w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border p-2 w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border p-2 w-full"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={form.password_confirmation}
              onChange={(e) =>
                setForm({ ...form, password_confirmation: e.target.value })
              }
              className="border p-2 w-full"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Register
            </button>
          </form>

          <form
            onSubmit={handleLogin}
            className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold">Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              className="border p-2 w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              className="border p-2 w-full"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome, {user.name}!</h2>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white p-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
