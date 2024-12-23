import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Postjob from "./Postjob";
import CircularIndeterminate from "./CircularIndeterminate";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { IoBriefcaseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function SearchedJobsPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { filteredJobs } = location.state || {};

  const handleBack = () => {
    navigate(-1);
  };

  const handleJobClick = async (jobId: any) => {
    setLoading(true);
    try {
      navigate(`/job/${jobId}`, { state: { filteredJobs: filteredJobs } });
    } catch (error) {
      console.error("Failed to fetch the job.", error);
    }
  };

  return (
    <div className="px-4 md:px-16">
      {loading ? (
        <div>
          <CircularIndeterminate />
        </div>
      ) : (
        <div className="my-8">
          <div className="flex flex-col gap-8">
            {/* Back Button */}
            <motion.div className="flex items-center gap-2" initial={{ scale: 0.9 }}
                animate={{ scale: 1, transition: { duration: 0.4 } }}>
              <IoIosArrowRoundBack className="h-7 w-7 text-gray-500 cursor-pointer" onClick={handleBack} />
              <p className="text-sm md:text-base">Back to all jobs</p>
            </motion.div>
            
            {/* Title and description */}
            <div className="flex flex-col gap-3">
              <motion.p className="font-bold text-2xl md:text-3xl text-gray-700" initial={{ scale: 0.7 }}
                animate={{ scale: 1, transition: { duration: 0.5 } }}>Found Results</motion.p>
              <motion.p className="text-gray-500 text-sm md:text-base mb-3" initial={{ scale: 0.7 }}
                animate={{ scale: 1, transition: { duration: 0.6 } }}>
                These are all the jobs we have managed to discover for you based on your search.
              </motion.p>

              {/* Job grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredJobs && filteredJobs.length > 0 ? (
                  filteredJobs.map((job: any) => (
                    <motion.div
                      key={job._id}
                      className="flex gap-4 md:gap-6 justify-center py-4 w-full max-w-xs md:max-w-full rounded-lg border-2 cursor-pointer"
                      onClick={() => { handleJobClick(job._id); }}
                      initial={{ scale: 0.8 }}
                animate={{ scale: 1, transition: { duration: 0.8 } }}
                    >
                      <div className="px-4 md:px-7 py-3">
                        <div className="flex justify-between">
                          <img
                            src={job.company.profilePicture}
                            className="w-16 md:w-20 rounded-xl"
                            alt={job.company.name}
                          />
                          <IoIosArrowRoundForward className="h-8 w-7 text-gray-500" />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                          <p className="text-gray-500 font-bold text-sm md:text-base">{job.company.name}</p>
                          <p className="font-bold text-lg md:text-xl">{job.title}</p>
                          <p className="text-gray-500 text-xs md:text-sm">{job.description}</p>
                        </div>
                        <div className="flex gap-2.5 mt-4">
                          <div className="flex items-center border border-gray-300 rounded p-1">
                            <CiLocationOn className="text-blue-500 mr-1.5 h-3 w-3" />
                            <p className="text-xs font-medium">{job.location}</p>
                          </div>
                          <div className="flex items-center border border-gray-300 rounded p-1">
                            <VscGraph className="text-blue-500 mr-1.5 h-3 w-3" />
                            <p className="text-xs font-medium">{job.level}</p>
                          </div>
                          <div className="flex items-center border border-gray-300 rounded p-1">
                            <IoBriefcaseOutline className="text-blue-500 mr-1.5 h-3 w-3" />
                            <p className="text-xs font-medium">{job.department}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center col-span-full">No data available</p>
                )}
              </div>
            </div>
          </div>
          <Postjob />
        </div>
      )}
    </div>
  );
}

export default SearchedJobsPage;
