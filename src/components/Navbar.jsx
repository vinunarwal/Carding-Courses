import { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center shadow-lg relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wider cursor-pointer">
        Carding <span className="text-green-400">Zone</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-lg">
        {[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/Courses" }, 
          { name: "Contact", path: "/" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative hover:text-green-400 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={item.path}>{item.name}</Link>
            <motion.span
              className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-green-400"
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Icons */}
      <div className="flex space-x-6">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaShoppingCart className="text-xl cursor-pointer transition-all hover:text-green-400" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaUser className="text-xl cursor-pointer transition-all hover:text-green-400" />
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <motion.div
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl"
        >
          ☰
        </motion.div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-6 shadow-md z-50"
          >
            {["Home", "Shop", "Contact"].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
