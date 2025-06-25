import {
  FaBuilding,
  FaInfoCircle,
  FaPaperPlane,
  FaUserCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaBuilding className="text-3xl text-blue-600" />,
      title: "Browse Companies",
      description:
        "Explore verified companies and click any logo to see job details.",
    },
    {
      icon: <FaInfoCircle className="text-3xl text-green-600" />,
      title: "Check Job Details",
      description:
        "Review job type, salary, requirements, and responsibilities.",
    },
    {
      icon: <FaPaperPlane className="text-3xl text-amber-600" />,
      title: "Apply Directly",
      description:
        "Click the Apply button to go to the company site and apply easily.",
    },
    {
      icon: <FaUserCircle className="text-3xl text-purple-600" />,
      title: "Manage Your Profile",
      description:
        "Login to view or update your personal profile and image anytime.",
    },
  ];

  return (
    <section className="py-12">
      <div className="px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-primaryFont">
          How It <span className="text-[#4B29CF]">Works</span>
        </h2>
        <p className="text-gray-600 mb-10 text-xs sm:text-sm font-seconderyFont">
          Follow these simple steps to find your next job with JobFinder.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow shadow-[#4B29CF] hover:shadow-md transition cursor-default"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
