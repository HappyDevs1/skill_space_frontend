import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllJobs } from "../services/jobService";
import { CiLocationOn } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import CircularIndeterminate from "./CircularIndeterminate";

interface Company {
  name: string;
  email: string;
  about: string;
  profilePicture: string;
}

interface Job {
  title: string;
  description: string;
  price: string;
  location: string;
  department: string;
  service: string;
}
function CompanyJobs() {
  const [companyJobs, setCompanyJobs] = useState<Job | []>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  const handleFetchJobs = async () => {
    try {
      const loggedInCompanyId = localStorage.getItem("user");
      console.log("Logged in company ID: ", loggedInCompanyId);

      const response = await getAllJobs();
      console.log("API response: ", response);

      // Safeguard: Ensure the 'service' key is present and is an array
      const allJobs = response?.service;
      if (!Array.isArray(allJobs)) {
        console.error("Expected 'service' to be an array, but got: ", allJobs);
        return;
      }

      const companiesJobs = allJobs.filter(
        (job) => String(job.company._id) === loggedInCompanyId
      );

      console.log("Matching jobs are: ", companiesJobs);

      setCompanyJobs(companiesJobs);
    } catch (error) {
      console.error("Failed to fetch jobs under this company: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleJobClick = async (job: any) => {
    try {
      navigate(`/${job._id}/job/applicants`);
      console.log("Clicked company id is: ", job._id);
    } catch (error) {
      console.error("Failed to view job applicants", error);
    }
  };

  useEffect(() => {
    handleFetchJobs();
  }, []);

  return (
    <div>
      {loading ? (
        <CircularIndeterminate />
      ) : (
        <div className="flex flex-col items-center justify-center w-full flex-grow mt-28 px-4">
          <motion.p
            className="font-semibold text-xl mb-6 text-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
          >
            Your Job Openings
          </motion.p>
          {companyJobs.length > 0 ? (
            companyJobs.map((job) => (
              <motion.div
                key={job._id}
                className="flex flex-col md:flex-row border rounded border-gray-400 px-3 py-3 w-full md:w-auto cursor-pointer mb-4"
                onClick={() => handleJobClick(job)}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1, transition: { duration: 0.3 } }}
              >
                {/* Left Section: Image */}
                <div className="flex items-center justify-center bg-sky-100 px-6 py-8 rounded-md md:px-11 md:py-14">
                  <img
                    src={job.company.profilePicture}
                    className="w-16 h-16 md:w-13 md:h-11 object-cover rounded"
                    alt={job.company.name}
                  />
                </div>

                {/* Middle Section: Job Info */}
                <div className="mt-4 md:mt-0 md:pl-7 md:pr-20">
                  <p className="font-semibold text-gray-400 my-2 text-center md:text-left">
                    {job.company.name}
                  </p>
                  <p className="font-bold text-xl text-center md:text-left">
                    {job.title}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mt-4 justify-center md:justify-start">
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

                {/* Right Section: Arrow */}
                <div className="mt-4 md:mt-0 flex items-center justify-center">
                  <div className="border border-gray-400 rounded p-1">
                    <IoIosArrowRoundForward className="h-7 w-7 text-gray-500" />
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div>No jobs available</div>
          )}
        </div>
      )}
    </div>
  );
}

export default CompanyJobs;
