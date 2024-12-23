import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCompanyById } from "../services/companyService";
import { getAllJobs } from "../services/jobService";
import Postjob from "./Postjob";
import CircularIndeterminate from "./CircularIndeterminate";
import { VscGraph } from "react-icons/vsc";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { motion } from "framer-motion";

interface Company {
  _id: string;
  name: string;
  email: string;
  role: string;
  profilePicture: string;
}

function AboutCompany() {
  const image = "https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/64b96d206c0fd7f0fadd9e49_facebook-cover-image-jobboardly-webflow-ecommerce-template-p-1080.png";

  const [company, setCompany] = useState<Company | null>(null)
  const [activeButton, setActiveButton] = useState<string>("jobs");
  const [loading, setLoading] = useState<boolean>(false);
  const [allJobs, setAllJobs] = useState<any>([]);
  const [companiesJobs, setCompaniesJobs] = useState<any>([]);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) {
      console.error("No company ID provided in route params.");
      return;
    }

    const fetchedFeaturedCompany = async () => {
      setLoading(true);
      try {
        // Fetch company data
        const data = await getCompanyById(id);
        setCompany(data);
        console.log("Viewed Company: ", data);
  
        // Fetch all jobs
        const response = await getAllJobs();
        console.log(allJobs);
        const foundJobs = response.service; // Access the 'service' array from the API response
        console.log("Found jobs: ", foundJobs);
  
        // Safeguard: Ensure foundJobs is an array
        if (!Array.isArray(foundJobs)) {
          console.error("Expected an array in 'service', but got: ", foundJobs);
          setCompaniesJobs([]); // Set empty if it's not an array
          return;
        }
  
        setAllJobs(foundJobs);
  
        // Filter jobs belonging to the specific company
        const companyJobs = foundJobs.filter((job) => job.company._id === data._id);
        setCompaniesJobs(companyJobs);
  
        console.log("The jobs under this company are: ", companyJobs);
      } catch (error) {
        console.error("Error fetching company information: ", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchedFeaturedCompany();
  }, [id])


  const handleButtonClick = (button: string) => {
    setActiveButton(button)
  };

  const handleJobClick = (service: any, services: any) => {
    try {
      console.log("Clicked company: ", service || services)
      navigate(`/job/${service._id}` || `/job/${services._id}`);
    } catch (error) {
      console.error("Failed to view job details");
    }
  };

  return (
<div>
  {loading ? (
    <CircularIndeterminate />
  ) : company ? (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full max-w-4xl border-2 rounded-xl my-6 p-4 sm:p-6 lg:py-8 lg:px-10">
        {/* Company Image */}
        <motion.div className="w-full" initial={{ scale: 0.8 }}
                animate={{ scale: 1, transition: { duration: 0.3 } }}>
          <img src={image} className="w-full rounded-t-xl object-cover" alt="Company banner" />
        </motion.div>

        {/* Profile Picture and Company Details */}
        <div className="w-full relative flex flex-col items-center mt-[-4rem] sm:mt-[-6rem]">
          {/* Profile Picture */}
          <motion.div className="w-10 h-10 mt-20 md:w-14 md:h-14 md:mt-28 lg:w-20 lg:h-20 lg:mt-12 rounded-xl overflow-hidden shadow-lg border border-gray-300 lg:self-start lg:ml-10" initial={{ scale: 0.5 }}
                animate={{ scale: 1, transition: { duration: 0.3 } }}>
            <img src={company.profilePicture} className="w-full h-full object-cover" alt="Company profile" />
          </motion.div>

          {/* Company Info */}
          <motion.div className="w-full mt-6 px-4 sm:px-6 lg:px-8" initial={{ scale: 0.7 }}
                animate={{ scale: 1, transition: { duration: 0.5 } }}>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-center lg:text-left">
              <p className="font-bold text-xl sm:text-2xl lg:text-3xl">{company.name}</p>
                <a href={company.website}>
                  <button className="bg-gray-100 px-3 py-2 rounded font-bold border border-gray-200 text-sm hover:bg-gray-200">Visit Website</button>
                </a>
            </div>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              This is a test message I will come back later on to edit it so that it makes sense.
              <br />
              I will come back at a later stage to edit it so it makes sense.
            </p>
          </motion.div>
        </div>

        {/* Location and Size */}
        <motion.div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-5 px-4" initial={{ scale: 0.7 }}
                animate={{ scale: 1, transition: { duration: 0.6 } }}>
          <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
            <CiLocationOn />
            <p>Gauteng</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
            <GoPerson />
            <p>100 - 1,000</p>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-8 mt-6 border-b-2 border-gray-300 w-full px-4" initial={{ scale: 0.7 }}
                animate={{ scale: 1, transition: { duration: 0.7 } }}>
          <button
            onClick={() => handleButtonClick("jobs")}
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base ${activeButton === "jobs" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
          >
            Company Jobs
          </button>
          <button
            onClick={() => handleButtonClick("about")}
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base ${activeButton === "about" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
          >
            About the Company
          </button>
          <button
            onClick={() => handleButtonClick("perks")}
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base ${activeButton === "perks" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
          >
            Company Perks & Benefits
          </button>
        </motion.div>

        {/* Tab Content */}
        <motion.div className="mt-6 px-4 sm:px-6 lg:px-8 text-sm sm:text-base" initial={{ scale: 0.8 }}
                animate={{ scale: 1, transition: { duration: 0.7 } }}>
          {activeButton === "jobs" && (
            <div className="flex flex-col gap-5 text-gray-500">
              <p className="font-bold text-lg sm:text-xl text-black">About Company</p>
              <p>{company.about}</p>
              <p className="font-bold text-lg sm:text-xl text-black">Company Job Openings</p>
              {
                companiesJobs.length > 0 ? (
                  companiesJobs.map((companyJob: any) => (
                    <div
                    key={companyJob._id}
                    className="flex flex-col md:flex-row border rounded border-gray-400 px-3 py-3 w-full md:w-auto cursor-pointer mb-4"
                    onClick={() => handleJobClick(companyJob)}
                  >
                    {/* Left Section: Image */}
                    <div className="flex items-center justify-center bg-sky-100 px-6 py-8 rounded-md md:px-11 md:py-14">
                      <img
                        src={companyJob.company.profilePicture}
                        className="w-16 h-16 md:w-13 md:h-11 object-cover rounded"
                        alt={companyJob.company.name}
                      />
                    </div>

                    {/* Middle Section: Job Info */}
                    <div className="mt-4 md:mt-0 md:pl-7 md:pr-20">
                      <p className="font-semibold text-gray-400 my-2 text-center md:text-left">
                        {companyJob.company.name}
                      </p>
                      <p className="font-bold text-xl text-center md:text-left">
                        {companyJob.title}
                      </p>
                      <div className="flex flex-wrap gap-2.5 mt-4 justify-center md:justify-start">
                        <div className="flex items-center border border-gray-300 rounded p-1">
                          <CiLocationOn className="text-blue-500 mr-1.5 h-3 w-3" />
                          <p className="text-xs font-medium">{companyJob.location}</p>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded p-1">
                          <VscGraph className="text-blue-500 mr-1.5 h-3 w-3" />
                          <p className="text-xs font-medium">{companyJob.level}</p>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded p-1">
                          <IoBriefcaseOutline className="text-blue-500 mr-1.5 h-3 w-3" />
                          <p className="text-xs font-medium">
                            {companyJob.department}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Section: Arrow */}
                    <div className="mt-4 md:mt-0 flex items-center justify-center">
                      <div className="border border-gray-400 rounded p-1">
                        <IoIosArrowRoundForward className="h-7 w-7 text-gray-500" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No jobs available</div>
              )}
            </div>
          )}
          {activeButton === "about" && (
            <div className="flex flex-col gap-5 text-gray-500">
              <p className="font-bold text-lg sm:text-xl text-black">About Company</p>
              <p>{company.about}</p>
            </div>
          )}
          {activeButton === "perks" && (
            <div className="flex flex-col gap-5 text-gray-500">
              <p className="font-bold text-lg sm:text-xl text-black">Company Perks and Benefits</p>
              <p>
                {company.perksAndBenefits}
              </p>
            </div>
          )}
        </motion.div>
      </div>
      <Postjob />
    </div>
  ) : (
    <div>No company found</div>
  )}
</div>


  )
}

export default AboutCompany;
