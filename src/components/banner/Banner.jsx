import { motion } from "framer-motion";
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-x-6 gap-y-14 items-center py-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-3xl lg:text-4xl font-primaryFont font-semibold leading-snug">
          Find Your Dream Job — <br />
          <span className="text-[#3B93F3] text-5xl lg:text-6xl">
            Fast,
          </span>{" "}
          <span className="text-[#64B599] text-5xl lg:text-6xl">Easy &</span>{" "}
          <span className="text-[#d37d2dde] text-5xl lg:text-6xl">Local</span>
        </h1>
        <p className="font-seconderyFont text-xs lg:text-sm text-gray-600 pt-6">
          Explore hundreds of job listings from trusted companies across the
          country. Filter, compare, and apply directly — all in one place. Start
          your career journey today with JobFinder!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <img
          src={bannerImg}
          alt="Job Search Banner"
          className="sm:w-[70%] mx-auto md:w-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
