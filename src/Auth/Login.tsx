import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import axios from "../config/axiosconfig";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../Global/UserSlice";
import { setAdminToken } from "../Global/AdminSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const loadingId = toast.loading("Please wait");
    try {
      const res = await axios.post("/user/login", formData);
      console.log(res);

      const userId = res.data.data._id;

      // VITE_DEVE_URL = https://bme-c0yv.onrender.com/api

      toast.success("Login Successful");

      setTimeout(() => {
        if (res.data.data.isAdmin) {
          dispatch(setAdminToken(res.data.data.token));
          navigate("/admin/adminhome");
        } else {
          dispatch(setUser(res.data.data));
          dispatch(setToken(res.data.token));
          localStorage.setItem("userId", userId);
          navigate("/user/overview");
        }
      }, 3000);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const errorMsg =
          error.response?.data?.message || "An unexpected error occurred";
        toast.error(errorMsg);
      } else {
        toast.error("Error occurred");
      }
    } finally {
      setLoading(false);
      toast.dismiss(loadingId);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900/90 via-black/90 to-black p-6">
      <motion.div
        className="w-full max-w-md p-8 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-md rounded-3xl border border-red-700 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-center mb-8 select-none"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome Back
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 select-none">Username</label>
            <input
              type="text"
              name="userName"
              onChange={handleChange}
              placeholder="(e.g JohnDoe)"
              className="input-red"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-gray-300 mb-1 select-none">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              placeholder="••••••••"
              className="input-red pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400 hover:text-red-400 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
            </button>
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-red-400 hover:text-red-500 font-semibold underline"
            >
              Forgot Password?
            </Link>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold flex justify-center items-center shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Login"
            )}
          </motion.button>
        </form>

        <p className="mt-8 text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-red-400 hover:text-red-500 font-semibold underline"
          >
            Register
          </Link>
        </p>
      </motion.div>

      <style>{`
        .input-red {
          background-color: rgba(0,0,0,0.6);
          border: 1.5px solid #B91C1C;
          color: #F3F4F6;
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          outline-offset: 2px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .input-red::placeholder {
          color: #9CA3AF;
        }
        .input-red:focus {
          border-color: #EF4444;
          box-shadow: 0 0 8px 2px rgba(239, 68, 68, 0.5);
          background-color: rgba(0,0,0,0.75);
          color: #F9FAFB;
        }
      `}</style>
    </section>
  );
};

export default Login;
