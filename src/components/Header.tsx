import { Menu, TrendingUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

    return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-40 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Bull Exchange</span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(path)
                    ? "text-red-400 bg-red-500/10"
                    : "text-gray-300 hover:text-red-400 hover:bg-red-500/5"
                }`}
              >
                {label}
                {isActive(path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 rounded-full" />
                )}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
  <motion.button
    className="relative text-red-400 border border-red-600 px-6 py-2 rounded-lg cursor-pointer font-semibold transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-red-600 to-red-700"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Login
  </motion.button>

  <motion.button
    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 cursor-pointer hover:to-red-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Register
  </motion.button>
</div>


          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4 border-t border-gray-800"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#plans" className="text-gray-300 hover:text-red-400 transition-colors">Plans</a>
                <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors">About</a>
                <a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</a>
                <button className="text-red-400 border border-red-600 px-6 py-2 rounded-lg cursor-pointer font-semibold transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-red-600 to-red-700 w-fit">
                  Login
                </button>
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-semibold w-fit">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );

    // <nav className="hidden md:flex space-x-8">
    //         {[
    //           { path: "/", label: "Home" },
    //           { path: "/about", label: "About" },
    //           { path: "/contact", label: "Contact" },
    //         ].map(({ path, label }) => (
    //           <Link
    //             key={path}
    //             to={path}
    //             className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
    //               isActive(path)
    //                 ? "text-red-400 bg-red-500/10"
    //                 : "text-gray-300 hover:text-red-400 hover:bg-red-500/5"
    //             }`}
    //           >
    //             {label}
    //             {isActive(path) && (
    //               <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 rounded-full" />
    //             )}
    //           </Link>
    //         ))}
    //       </nav>


};

export default Header;
