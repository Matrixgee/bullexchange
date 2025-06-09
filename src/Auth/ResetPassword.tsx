import { motion } from "framer-motion";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
          Reset Your Password
        </motion.h2>

        <form className="space-y-6">
          <div className="relative flex flex-col">
            <label className="text-gray-300 mb-1 select-none">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="input-red pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400 hover:text-red-400 transition-colors"
            >
              {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
            </button>
          </div>

          <div className="relative flex flex-col">
            <label className="text-gray-300 mb-1 select-none">Confirm Password</label>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="••••••••"
              className="input-red pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-9 text-gray-400 hover:text-red-400 transition-colors"
            >
              {showConfirm ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
            </button>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset Password
          </motion.button>
        </form>
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

export default ResetPassword;
