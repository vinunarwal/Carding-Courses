import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-[500px] sm:h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center px-4 sm:px-6 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/random/1600x900/?cyberpunk,technology,futuristic')",
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center space-y-3 sm:space-y-6 w-full max-w-full sm:max-w-lg">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg"
        >
          Welcome to Carding Zone
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="mt-2 text-lg sm:text-xl text-gray-300 max-w-full sm:max-w-lg px-2"
        >
          Exclusive carding courses designed for professionals. Learn, master, and stay ahead of the game!
        </motion.p>

        {/* Glassmorphism Effect Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
          className="mt-4 sm:mt-6 bg-white/10 backdrop-blur-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/20 shadow-lg w-full sm:w-auto"
        >
          <p className="text-gray-200 text-base sm:text-lg">
            Enroll today and get access to premium content!
          </p>
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-4 sm:mt-6 w-full sm:w-auto"
        >
          <Link
            to="/Courses"
            className="inline-block w-full sm:w-auto px-8 sm:px-10 py-3 text-lg font-semibold tracking-wide text-white bg-gradient-to-r from-red-500 to-pink-600 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/50 text-center"
          >
            Shop Now 🚀
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
