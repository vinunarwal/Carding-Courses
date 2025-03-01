import { FaTruck, FaHeadset, FaLock, FaBoxes } from "react-icons/fa";

const features = [
  { icon: <FaTruck size={30} />, title: "Fast Delivery", description: "Get your order delivered quickly and safely." },
  { icon: <FaHeadset size={30} />, title: "24/7 Support", description: "We're here to help you anytime, anywhere." },
  { icon: <FaLock size={30} />, title: "Secure Payment", description: "100% safe and secure payment options." },
  { icon: <FaBoxes size={30} />, title: "Huge Selection", description: "Wide range of products to choose from." },
];

const Features = () => {
  return (
    <div className="bg-gray-800 text-white py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-blue-400">{feature.icon}</div>
            <h3 className="mt-2 text-lg font-bold">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
