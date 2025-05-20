import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import API from "../api/axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/login", formData);
      login(res.data.user, res.data.token);
      navigate("/feed");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to CSAConnect
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-orange-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
