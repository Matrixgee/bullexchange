import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import axios from "../config/axiosconfig";
import toast from "react-hot-toast";
import logo from '../assets/logo.png'

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState<boolean>(false)
  const [passwordErr, setPasswordErr] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const passwordRegex = (password: string) => {
  return /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(password);
};

const emailRegex = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const {
    fullName,
    userName,
    email,
    phoneNumber,
    password,
    confirmPassword,
  } = formData;

  // Required field check
  if (!fullName || !userName || !email || !phoneNumber || !password || !confirmPassword) {
    toast.error("Please fill all fields.");
    return;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match.");
    return;
  }

  const isPasswordValid = passwordRegex(password);
  const isEmailValid = emailRegex(email);

  setPasswordErr(!isPasswordValid);
  setEmailErr(!isEmailValid);

  if (!isPasswordValid || !isEmailValid) {
    return; 
  }

  setLoading(true);
  const loadingId = toast.loading("Please wait...")

  try {
    const res = await axios.post("/user/signup", formData);
    console.log(res)

    setTimeout(() => {
      toast.success("Account created successfully!");
      setFormData({
        fullName: "",
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
    }, 3000);
  } catch (error) {
    console.log(error);
    toast.error("Signup failed. Please try again.");
  } finally {
    setLoading(false);
    toast.dismiss(loadingId)
  }
};


  const inputClass =
  "bg-black/60 border border-red-700 text-gray-100 placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-black/75 transition duration-200 w-full";


  return (
    <section className="min-h-screen py-10 max-md:px-0.5 flex items-center justify-center relative bg-gradient-to-br from-red-900/90 via-black/90 to-black">
      <motion.div
        className="w-full max-w-md p-8 max-md:px-5 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-md rounded-3xl shadow-2xl border border-red-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex items-center justify-center mb-[23px] gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="" className="h-[57px] w-[90px]" />
        </motion.div>

        <h2 className="text-center text-3xl font-extrabold text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
      


  <div className="">
    <label htmlFor="firstName" className="text-gray-300 mb-1 block">
      Full Name
    </label>
    <input
      id="fullName"
      name="fullName"
      type="text"
      value={formData.fullName}
      onChange={handleChange}
      placeholder="John"
      className={inputClass}
    />
  </div>

<div>
  <label htmlFor="userName" className="text-gray-300 mb-1 block">
    Username
  </label>
  <input
    id="userName"
    name="userName"
    type="text"
    value={formData.userName}
    onChange={handleChange}
    placeholder="johndoe123"
    className={inputClass}
  />
</div>

<div>
  <label htmlFor="email" className="text-gray-300 mb-1 block">
    Email
  </label>
  <input
    id="email"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="you@example.com"
    className={inputClass}
  />
</div>
<p className="text-red-700 text-sm">
  {emailErr ? "Please enter a valid email address." : null}
</p>

<div>
  <label htmlFor="phoneNumber" className="text-gray-300 mb-1 block">
    Phone Number
  </label>
  <input
    id="phoneNumber"
    name="phoneNumber"
    type="tel"
    value={formData.phoneNumber}
    onChange={handleChange}
    placeholder="+123 456 7890"
    className={inputClass}
  />
</div>

<div className="relative">
  <label htmlFor="password" className="text-gray-300 mb-1 block">
    Password
  </label>
  <input
    id="password"
    name="password"
    type={showPassword ? "text" : "password"}
    value={formData.password}
    onChange={handleChange}
    placeholder="Password"
    className={`${inputClass} pr-10`}
  />
  <button
    type="button"
    onClick={() => setShowPassword((prev) => !prev)}
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-300 hover:text-red-400"
    aria-label="Toggle password visibility"
  >
    {showPassword ? <BsEyeSlash /> : <BsEye />}
  </button>
</div>
<p className="text-red-600 text-sm">
  {passwordErr ? "Password must be at least 8 characters and include a special character." : null}
</p>

<div className="relative">
  <label htmlFor="confirmPassword" className="text-gray-300 mb-1 block">
    Confirm Password
  </label>
  <input
    id="confirmPassword"
    name="confirmPassword"
    type={showConfirmPassword ? "text" : "password"}
    value={formData.confirmPassword}
    onChange={handleChange}
    placeholder="Confirm Password"
    className={`${inputClass} pr-10`}
  />
  <button
    type="button"
    onClick={() => setShowConfirmPassword((prev) => !prev)}
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-300 hover:text-red-400"
    aria-label="Toggle confirm password visibility"
  >
    {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
  </button>
</div>


          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
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
              <>
                <span>Create Account</span>
                <FiCheck />
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </motion.div>

      {/* Styles for inputs and buttons */}
      <style>{`
        .input-red {
          background-color: rgba(0,0,0,0.6);
          border: 1.5px solid #B91C1C; /* red-700 */
          color: #F3F4F6; /* gray-100 */
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          outline-offset: 2px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .input-red::placeholder {
          color: #9CA3AF; /* gray-400 */
        }
        .input-red:focus {
          border-color: #EF4444; /* red-500 */
          box-shadow: 0 0 8px 2px rgba(239, 68, 68, 0.5);
          background-color: rgba(0,0,0,0.75);
          color: #F9FAFB;
        }
        .eye-button-red {
          position: absolute;
          top: 50%;
          right: 1rem;
          transform: translateY(-50%);
          color: #FCA5A5; /* red-300 */
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 1.25rem;
          transition: color 0.2s ease;
        }
        .eye-button-red:hover {
          color: #F87171; /* red-400 */
        }
      `}</style>
    </section>
  );
};

export default Register;
