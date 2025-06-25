import { use } from "react";
import Company from "../company/Company";
import { motion } from "framer-motion";

const Companies = ({ jobsData }) => {
  const allJobsData = use(jobsData);

  return (
    <div className="py-18">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center font-primaryFont">
        Featured <span className="text-[#4B29CF]">Companies</span>
      </h2>
      <p className="text-gray-600 mb-14 text-xs sm:text-sm font-seconderyFont text-center">
        Browse through our list of featured companies and find your next career
        destination today.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {allJobsData.map((items, index) => (
          <motion.div
            key={items.id}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Company company={items} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
