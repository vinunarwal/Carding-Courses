import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CoursesCards = ({ title, price, image, id }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-900 text-white p-4 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-60 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-3">
        <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
        <p className="text-red-500 text-lg font-bold mt-1">Rs. {price}</p>
      </div>

      <Link to={`/CourseDetails/${id}`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 bg-blue-600 px-5 py-2 rounded-lg font-semibold w-full transition-all duration-300 hover:bg-blue-800 shadow-md"
        >
          View Details
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default CoursesCards;
