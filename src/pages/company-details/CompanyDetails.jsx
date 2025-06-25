import React, { useEffect } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaIndustry } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useLoaderData, useNavigation, useParams } from "react-router";
import JobDetails from "../../components/job-details/JobDetails";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const CompanyDetails = () => {
  const allCompaniesData = useLoaderData();
  const { id } = useParams();
  const company = allCompaniesData.find((item) => item.id == id);
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  const pageVariants = {
    hidden: { opacity: 0, y: "-110%" },
    visible: { opacity: 1, y: "0", transition: { duration: 0.6 } },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (company) {
      document.title = `JobFinder | ${company.name}`;
    }
  }, [company]);

  return (
    <>
      <Helmet>
        <title>JobFinder | {company?.name}</title>
      </Helmet>
      {isNavigating && <Loading />}
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="px-4 sm:px-8 py-8"
      >
        <div className="flex gap-4 sm:gap-8 items-center py-10">
          <div>
            <img
              src={company.logo}
              alt=""
              className="w-28 sm:w-40 object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-primaryFont font-bold sm:tracking-widest pb-3">
              {company.name}
            </h1>
            <div className="flex gap-1 sm:gap-7 flex-col sm:flex-row sm:items-center text-xs sm:text-sm font-seconderyFont">
              <p className="flex items-center gap-1">
                <IoLocationSharp size={20} className="text-[#2478B8]" />
                {company.location}
              </p>
              <div className="hidden sm:block"> | </div>
              <p className="flex items-center gap-2">
                <FaIndustry size={18} className="text-[#2478B8]" />
                {company.industry}
              </p>
            </div>
            <a
              href={company.website}
              className="underline pt-2 flex items-center gap-1 cursor-pointer text-xs sm:text-sm font-seconderyFont"
            >
              <CiGlobe size={20} className="text-[#2478B8]" />
              {company.website}
            </a>
          </div>
        </div>
        <hr className=" border-[#4a29cf69]" />
        <div className="py-16">
          {company?.jobs?.map((job) => (
            <JobDetails job={job} url={company.website} key={job.id} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default CompanyDetails;
