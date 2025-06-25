import { useState } from "react";
import Job from "../single-job/Job";

const JobDetails = ({ job, url }) => {
  const [modal, setModal] = useState(null);

  return (
    <>
      <div className="border border-gray-300 py-6 px-10 md:px-5 lg:px-10  rounded-2xl mb-5 flex flex-col md:flex-row gap-y-5 justify-between items-center">
        <div className="flex flex-col items-center md:items-start gap-3 md:gap-1">
          <div className="flex items-center flex-col sm:flex-row gap-2">
            <h1 className="text-2xl font-primaryFont font-semibold md:pb-2 text-center">
              {job.title}
            </h1>
            <div>
              <div className="px-5 flex items-center py-1 text-xs font-seconderyFont rounded-full bg-[#D2F8E6] text-[#2dbd7a] ">
                {job.jobType}
              </div>
            </div>
          </div>
          <h1 className=" font-seconderyFont ">Salary: {job.salary}</h1>
        </div>
        <button
          onClick={() => setModal(job)}
          className="btn btn-primary hover:btn-outline hover:bg-transparent hover:text-black"
        >
          View Details
        </button>
      </div>

      {modal && <Job job={modal} setModal={setModal} url={url} />}
    </>
  );
};

export default JobDetails;
