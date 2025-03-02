import { FaBook, FaUserShield, FaClock, FaTools } from "react-icons/fa";

const features = [
  { icon: <FaBook size={40} />, title: "Comprehensive Courses", description: "Learn everything from basics to advanced techniques." },
  { icon: <FaUserShield size={40} />, title: "Privacy & Security", description: "Stay anonymous with expert security guidance." },
  { icon: <FaClock size={40} />, title: "24/7 Access", description: "Learn at your own pace with lifetime course access." },
  { icon: <FaTools size={40} />, title: "Practical Training", description: "Hands-on experience with real-world scenarios." },
];

const Features = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Why Choose Our Courses?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 flex flex-col items-center"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
