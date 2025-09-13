import { useParams } from "react-router-dom";
import { useState } from "react";
import { courses } from "./Courses";
import { FaGooglePay, FaUniversity, FaCreditCard } from "react-icons/fa";
import { SiPaytm, SiPhonepe } from "react-icons/si";
import Qr1 from "../assests/images/Qr1.jpeg";
import { motion, AnimatePresence } from "framer-motion";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((p) => p.id === parseInt(id));

  // State for quantity, email, agreement checkbox, and selected payment method
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("GPay");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const [showQR, setShowQR] = useState(false);

  if (!course) {
    return <div className="text-white text-center p-6">Course not found!</div>;
  }

  // Calculate total
  const total = (course.price * quantity).toFixed(2);

  // Payment methods array
  const paymentMethods = [
    { name: "GPay", icon: <FaGooglePay className="text-blue-500 text-xl" /> },
    { name: "Paytm", icon: <SiPaytm className="text-blue-400 text-xl" /> },
    {
      name: "PhonePe",
      icon: <SiPhonepe className="text-purple-500 text-xl" />,
    },
    // {
    //   name: "Bank Transfer",
    //   icon: <FaUniversity className="text-green-500 text-xl" />,
    // },
    // {
    //   name: "Credit Card",
    //   icon: <FaCreditCard className="text-yellow-500 text-xl" />,
    // },
  ];

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-8 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Card - course Details */}
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg w-full md:w-1/2">
        <motion.img
          src={course.image}
          alt={course.title}
          className="w-full h-60 object-cover rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        />
        <h2 className="mt-4 text-2xl font-bold">{course.title}</h2>
        <p className="mt-2 text-gray-300">
          {course.description || "No description available."}
        </p>
        <p className="mt-2 text-red-400 font-semibold text-lg">
          Rs. {course.price}
        </p>
      </div>

      {/* Right Card - Payment Details */}
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg w-full md:w-1/2">
        <h3 className="text-lg font-bold">Payment Details</h3>

        {/* Variant & Quantity */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-gray-300">
            <strong>Variant:</strong> {course.title}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Email Address */}
        <div className="mt-4">
          <label className="text-gray-300 block mb-1">Email Address</label>
          <input
            type="email"
            className="w-full bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Payment Method */}
        <div className="mt-4 relative">
          <label className="text-gray-300 block mb-1">Payment Method</label>
          <div
            className="bg-gray-800 text-white p-2 rounded-md flex justify-between items-center cursor-pointer hover:bg-gray-700 transition"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="flex items-center gap-2">
              {paymentMethods.find((m) => m.name === paymentMethod)?.icon}
              {paymentMethod}
            </span>
            <span>▼</span>
          </div>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-1 w-full bg-gray-800 rounded-md shadow-lg overflow-hidden"
              >
                {paymentMethods.map((method, index) => (
                  <li
                    key={index}
                    className="p-2 flex items-center gap-2 hover:bg-gray-700 cursor-pointer transition"
                    onClick={() => {
                      setPaymentMethod(method.name);
                      setDropdownOpen(false);
                    }}
                  >
                    {method.icon} {method.name}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Agreement Checkbox */}
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="agree"
            className="w-4 h-4"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <label htmlFor="agree" className="ml-2 text-gray-300 text-sm">
            I agree to the{" "}
            <span className="text-blue-400 cursor-pointer hover:underline">
              terms and conditions
            </span>
          </label>
        </div>

        {/* Total */}
        <p className="mt-4 text-lg font-semibold text-gray-300">
          Total: Rs. {total}
        </p>

        {/* Purchase Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!agree}
          onClick={() => setShowQR(true)}
          className={`mt-4 px-6 py-2 w-full rounded-md font-bold transition ${
            agree
              ? "bg-green-600 hover:bg-green-800"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Purchase
        </motion.button>
      </div>

      {/* QR Code Popup Modal */}
      <AnimatePresence>
        {showQR && (
          <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn"
            onClick={() => setShowQR(false)} // Close on outside click
          >
            <div
              className="bg-gray-900 p-6 rounded-2xl shadow-xl text-center relative w-80 border border-gray-700 transform scale-95 transition-all duration-300 animate-scaleUp"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 w-8 h-8 flex items-center justify-center hover:bg-red-700 transition"
                onClick={() => setShowQR(false)}
              >
                ✖
              </button>

              {/* Title */}
              <h3 className="text-xl font-bold text-white">Scan & Pay</h3>

              {/* QR Image */}
              <div className="bg-white p-2 rounded-lg mt-4 shadow-md">
                <img src={Qr1} alt="QR Code" className="w-40 h-40 mx-auto" />
              </div>

              {/* Instructions */}
              <p className="text-gray-300 text-sm mt-3">
                After payment, send the screenshot on{" "}
                <a
                  href="https://t.me/cczoneadmin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline font-semibold"
                >
                  Telegram
                </a>
                .
              </p>

              {/* Go to Telegram Button */}
              <a
                href="https://t.me/carderzone69"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Go to Telegram
              </a>
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CourseDetails;
