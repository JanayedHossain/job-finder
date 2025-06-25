import React, { useEffect, useState } from "react";
import bgAbout from "../../assets/bgAbout.jpg";
import imgSuccess from "../../assets/imgSuccess.jpg";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { useLoaderData, useNavigate, useNavigation } from "react-router";
import world from "../../assets/world.jpg";
import Loading from "../../components/loading/Loading";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const jobs = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "JobFinder | About Us";
  }, []);
  return (
    <>
      <Helmet>
        <title>JobFinder | About Us</title>
      </Helmet>
      {(isNavigating || !isImageLoaded) && <Loading />}
      <motion.div
        className="relative w-full h-screen max-h-[250px] sm:max-h-[300px] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={bgAbout}
          alt="About Us"
          className="object-cover absolute top-0 left-0 h-full w-full"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.5)]"></div>
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-primaryFont">About Us</h1>
        </div>
        <p className="absolute bottom-5 w-full flex items-center justify-center sm:text-xl">
          JobFinder &gt; About Us
        </p>
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-2 gap-5 my-28 font-seconderyFont items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={imgSuccess}
          alt="Success"
          onLoad={() => setIsImageLoaded(true)}
          className="w-11/12 mx-auto rounded-2xl shadow"
        />
        <div>
          <h1 className="font-primaryFont text-2xl sm:text-4xl pb-5">
            Millions of <span className="text-[#5328C9]">jobs.</span> <br />{" "}
            Find the one that's right for you.
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Explore millions of job opportunities and discover the one that
            perfectly matches your skills and ambitions. Whether you're just
            starting out or looking for your next big move, your dream job is
            just a click away.
          </p>
          <ul className="pl-2 sm:pl-5 mt-5 text-xs sm:text-sm text-gray-500">
            <li className="flex items-center gap-1">
              <div>
                <IoCheckmarkDoneSharp size={20} className="text-[#5328C9]" />
              </div>
              <div>To create a user-friendly platform for job seekers.</div>
            </li>
            <li className="flex items-center gap-1">
              <div>
                <IoCheckmarkDoneSharp size={20} className="text-[#5328C9]" />
              </div>
              <div>
                Experience accessing job opportunities from trusted companies in
                one place.
              </div>
            </li>
            <li className="flex items-center gap-1">
              <div>
                <IoCheckmarkDoneSharp size={20} className="text-[#5328C9]" />
              </div>
              <div>
                Composed of experienced design and development professionals.
              </div>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-3 gap-7 max-w-[80%] mx-auto font-seconderyFont mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="text-center border border-gray-300 flex items-center rounded-2xl justify-center flex-col px-4 py-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl pb-3 font-bold font-primaryFont">
            <CountUp end={1500} duration={5} />
            K+
          </div>
          <p className="text-gray-500">Job Listings</p>
        </motion.div>

        <motion.div
          className="text-center border border-gray-300 flex items-center rounded-2xl justify-center flex-col px-4 py-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl pb-3 font-bold font-primaryFont">
            <CountUp end={25} duration={5} />+
          </div>
          <p className="text-gray-500">Companies Registered</p>
        </motion.div>

        <motion.div
          className="text-center border border-gray-300 flex items-center rounded-2xl justify-center flex-col px-4 py-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl pb-3 font-bold font-primaryFont">
            <CountUp end={9} duration={5} />+
          </div>
          <p className="text-gray-500">Years of Experience</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="my-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Marquee>
          {jobs.map((items, index) => (
            <img
              key={index}
              src={items.logo}
              className="w-32 sm:w-40 flex mr-10 sm:mr-20"
            />
          ))}
        </Marquee>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center gap-5 relative h-screen max-h-[250px] sm:max-h-[300px] my-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <img
          src={world}
          alt="About Us Background"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.6)]"></div>
        <div className="text-white z-1 flex items-center flex-col gap-2 text-center">
          <h1 className="text-2xl px-10 sm:px-0 sm:text-3xl md:text-4xl font-primaryFont">
            Job Opportunities Are Always Open
          </h1>
          <p className="font-seconderyFont text-xs sm:text-sm text-gray-300 px-2">
            JobFinder offers endless job opportunities, connecting you with top
            companies. Your next career move is just a click away!
          </p>
          <div>
            <button
              className="btn btn-primary mt-4 px-9 hover:bg-transparent btn-xs sm:btn-sm md:btn-md"
              onClick={() => navigate("/")}
            >
              Find Jobs
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutUs;
