import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center py-4 text-3xl font-semibold shadow-lg"
    >
      Welcome to Our Zone
    </motion.header>
  );
};

export default Hero;
