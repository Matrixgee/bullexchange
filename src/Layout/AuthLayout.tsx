import { Outlet, Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10">
      <Link to="/" className="flex items-center space-x-3 mb-8">
        <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-xl shadow-lg">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Bull Market Exchange
        </span>
      </Link>

      <div className="w-full max-w-md bg-gradient-to-br from-red-900/10 to-gray-900 rounded-xl p-8 shadow-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
