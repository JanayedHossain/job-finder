import { useContext, useEffect, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import Loading from "../loading/Loading";
import { AuthContext } from "../../provider/AuthProvider";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Job = ({ job, setModal, url }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const handleApply = () => {
    if (user) {
      window.open(url, "_blank");
    } else {
      navigate("/login");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 h-screen w-full bg-white z-[999] overflow-y-auto"
    >
      {!isImageLoaded && <Loading />}

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        className="relative flex items-center justify-center text-center"
      >
        <img
          src={job.bannerImage}
          alt=""
          onLoad={() => setIsImageLoaded(true)}
          className="w-full max-h-[50vh] object-cover"
        />

        <div className="absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.6)]"></div>
        <div className="absolute pl-8 text-white font-seconderyFont">
          <h1 className="text-3xl sm:text-5xl font-semibold font-primaryFont text-center">
            {job.title}
          </h1>
          <p className="py-3 text-xs sm:text-sm md:text-base text-center">
            {job.description}
          </p>
          <div className="flex items-center gap-3 justify-center text-sm md:text-base pt-3 pb-1">
            <p>{job.location}</p>
            <span>|</span>
            <p>{job.jobType}</p>
          </div>
          <p className=" text-sm md:text-base">
            Salary: <span className="pl-2">{job.salary}</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="px-7 py-6"
      >
        <h1 className="font-primaryFont font-semibold text-xl mb-2">
          Requirements:
        </h1>
        <ul className="font-seconderyFont text-sm sm:text-base">
          {job.requirements.map((item, index) => (
            <li key={index} className="pl-3 flex items-center gap-1">
              <IoCheckmarkOutline />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-3 mt-5 items-center justify-center">
          <button
            onClick={() => setModal(null)}
            className="btn btn-outline btn-primary"
          >
            Back
          </button>

          <button className="btn btn-primary px-5" onClick={handleApply}>
            Apply
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Job;
