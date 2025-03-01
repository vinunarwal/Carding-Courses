import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center px-4 relative"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/1600x900/?gaming,technology')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl font-extrabold drop-shadow-lg"
        >
          Welcome to Carding Zone
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-3 text-lg text-gray-200"
        >
          Best carding courses at the best prices.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          href="/shop"
          className="mt-5 inline-block bg-red-600 px-8 py-3 text-lg rounded-lg shadow-lg font-semibold tracking-wide transition-all duration-300 hover:bg-red-800 hover:scale-105"
        >
          Shop Now
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Hero;
