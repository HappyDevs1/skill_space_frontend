import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Postjob from "./Postjob";
import {
  getAllJobs,
  getFeaturedJob,
  getJobByFilter,
} from "../services/jobService";
import { getFeaturedCompany } from "../services/companyService";
import { FaSearch, FaCloud, FaCentercode } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Select from "react-select";
import { VscGraph } from "react-icons/vsc";
import { IoBriefcaseOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { DiCompass } from "react-icons/di";
import { IoIosArrowRoundForward } from "react-icons/io";
import CircularIndeterminate from "./CircularIndeterminate";
import { motion } from "framer-motion"

// interface Job {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   location: string;
//   level: string;
//   department: string;
//   featured: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

function Home() {
  const locationDropdown = [
    { value: "Gauteng", label: "Gauteng" },
    { value: "Eastern-Cape", label: "Eastern-Cape" },
    { value: "Mpumalanga", label: "Mpumalanga" },
    { value: "Free-State", label: "Free-State" },
    { value: "Limpopo", label: "Limpopo" },
    { value: "North-West", label: "North-West" },
    { value: "Nothern-Cape", label: "Nothern-Cape" },
    { value: "KwaZulu-Natal", label: "KwaZulu-Natal" },
    { value: "Western-Cape", label: "Western-Cape" },
  ];

  const levelDropdown = [
    { value: "Internship", label: "Internship" },
    { value: "Junior", label: "Junior" },
    { value: "Mid-level", label: "Mid-level" },
    { value: "Senior", label: "Senior" },
  ];

  const departmentDropdown = [
    { value: "Finance", label: "Finance" },
    { value: "Technology", label: "Technology" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Real-estate", label: "Real-estate" },
    { value: "Construction", label: "Construction" },
  ];

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      minHeight: "2.5rem",
      height: "100%",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "gray",
      fontSize: "0.875rem",
    }),
  };

  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [featured, setFeatured] = useState<any[]>([]);
  const [featCompany, setFeatCompany] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const navigate = useNavigate();
  const locationHook = useLocation();

  const fetchJobs = async () => {
    try {
      const response = await getAllJobs();
      console.log("Fetched Jobs: ", response);
      if (response && response.service) {
        setJobs(response.service);
      } else if (!response) {
        setLoading(true);
      } else {
        setJobs([]);
      }
    } catch (error) {
      console.error("Error fetching jobs: ", error);
      setError("Failed to fetch jobs.");
    }
  };

  const fetchFeatured = async () => {
    try {
      const response = await getFeaturedJob();
      console.log("Fetched Featured Jobs: ", response);
      if (response && response.services) {
        setFeatured(response.services);
      } else {
        setFeatured([]);
      }
    } catch (error) {
      console.error("Error fetching featured jobs: ", error);
      setError("Failed to fetch featured jobs.");
    }
  };

  const fetchFeaturedCompany = async () => {
    try {
      const data = await getFeaturedCompany();
      console.log("Found featured companies: ", data);
      if (data && data.company) {
        setFeatCompany(data.company);
      } else {
        setFeatCompany([]);
      }
    } catch (error) {
      console.error("Error fetching featured users: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchJobs(),
          fetchFeatured(),
          fetchFeaturedCompany(),
        ]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const filteredJobs = await getJobByFilter({
        title,
        location,
        level,
        department,
      });
      console.log(filteredJobs);

      navigate("/filter", { state: { filteredJobs: filteredJobs } });
      setTitle("");
      setLocation("");
      setLevel("");
      setDepartment("");
    } catch (error) {
      console.error("Error when searching for jobs: ", error);
      setError("Failed to search for jobs.");
    }
  };

  const handleCompanyClick = (company: any) => {
    if (!company) {
      console.error("Company is undefined");
      return;
    }
    console.log("Clicked company:", company);
    navigate(`/about/company/${company._id}`);
  };

  const handleJobClick = (service: any, services: any) => {
    try {
      console.log("Clicked company: ", service || services);
      navigate(`/job/${service._id}` || `/job/${services._id}`);
    } catch (error) {
      console.error("Failed to view job details");
    }
  };

  if (loading) return <CircularIndeterminate />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <CircularIndeterminate />
        </div>
      ) : (
        <div className="flex flex-col items-center min-h-screen mb-52">
          <div className="w-full">
            <motion.div className="m-5 sm:m-10 lg:m-20 self-start" >
              <motion.p className="font-bold text-sky-500 text-lg sm:text-xl lg:text-2xl" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.2 } }}>
                TOP CAREER OPPORTUNITIES
              </motion.p>
              <motion.p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 mb-5"initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.4 } }}>
                Find your ideal job <br /> across all industries
              </motion.p>
              <motion.p className="text-slate-600 text-base sm:text-lg lg:text-xl" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.6 } }}>
                Explore a diverse array of career opportunities in <br />{" "}
                multiple sectors. Whether you're seeking <br /> a position in
                technology, healthcare, finance, <br /> or any other industry,
                we have the perfect role <br /> to match your skills and
                aspirations.
              </motion.p>
              <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4 text-slate-500 font-bold" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.8 } }}>
                <div className="flex items-center justify-center">
                  <DiCompass className="mr-2" />
                  <p>agency</p>
                </div>
                <div className="flex items-center justify-center">
                  <FaCloud className="mr-2" />
                  <p>application</p>
                </div>
                <div className="flex items-center justify-center">
                  <GrTechnology className="mr-2" />
                  <p>business</p>
                </div>
                <div className="flex items-center justify-center">
                  <FaCentercode className="mr-2" />
                  <p>company</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center w-full flex-grow px-4 sm:px-8 md:px-16" initial={{ scale: 0.3 }} animate={{ scale: 1, transition: { duration: 0.8 } }}>
              <form onSubmit={handleSearch} className="w-full max-w-6xl">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 items-center border border-gray-400 rounded p-4">
                  <div className="flex items-center w-full sm:w-auto border border-gray-300 rounded p-2">
                    <FaSearch className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search for jobs"
                      className="flex-grow py-2 px-2 focus:outline-none"
                      value={title}
                      onChange={(event) => {
                        setTitle(event.target.value);
                      }}
                    />
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>

                  <div className="flex items-center w-full sm:w-auto border border-gray-300 rounded p-2">
                    <CiLocationOn className="text-gray-500" />
                    <div className="w-full sm:w-48">
                      <Select
                        options={locationDropdown}
                        value={locationDropdown.find(
                          (option) => option.value === location
                        )}
                        placeholder="Location"
                        classNamePrefix="react-select"
                        styles={customStyles}
                        onChange={(selectedOption) =>
                          setLocation(selectedOption?.value || "")
                        }
                      />
                    </div>
                  </div>

                  <div className="flex items-center w-full sm:w-auto border border-gray-300 rounded p-2">
                    <VscGraph className="text-gray-500" />
                    <div className="w-full sm:w-48">
                      <Select
                        options={levelDropdown}
                        value={levelDropdown.find(
                          (option) => option.value === level
                        )}
                        placeholder="Job level"
                        classNamePrefix="react-select"
                        styles={customStyles}
                        onChange={(selectedOption) => {
                          setLevel(selectedOption?.value || "");
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center w-full sm:w-auto border border-gray-300 rounded p-2">
                    <IoBriefcaseOutline className="text-gray-500" />
                    <div className="w-full sm:w-48">
                      <Select
                        options={departmentDropdown}
                        value={departmentDropdown.find(
                          (option) => option.value === department
                        )}
                        placeholder="Department"
                        classNamePrefix="react-select"
                        styles={customStyles}
                        onChange={(selectedOption) => {
                          setDepartment(selectedOption?.value || "");
                        }}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>

            <div className="flex flex-col items-center justify-center w-full flex-grow mt-28 px-4">
              <motion.p className="font-semibold text-xl mb-6 text-center" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.8 } }}>
                Featured Jobs
              </motion.p>
              {featured.length > 0 ? (
                featured.map((job) => (
                  <motion.div
                    key={job._id}
                    className="flex flex-col md:flex-row border rounded border-gray-400 px-3 py-3 w-full md:w-auto cursor-pointer mb-4"
                    onClick={() => handleJobClick(job)}
                    initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.9 } }}
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
                          <p className="text-xs font-medium">
                            {job.department}
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
                  </motion.div>
                ))
              ) : (
                <div>No jobs available</div>
              )}
            </div>

            {/* Displaying latest jobs */}
            <div className="flex flex-col items-center justify-center w-full flex-grow mt-24 px-4">
              <motion.p className="font-semibold text-xl mb-6 text-center" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.8 } }}>
                Latest jobs
              </motion.p>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <motion.div
                    key={job._id}
                    className="flex flex-col md:flex-row border rounded border-gray-400 px-3 py-3 w-full md:w-auto cursor-pointer mb-4"
                    onClick={() => handleJobClick(job)}
                    initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.9 } }}
                  >
                    {/* Left Section: Profile Picture */}
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
                          <p className="text-xs font-medium">
                            {job.department}
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
                  </motion.div>
                ))
              ) : (
                <div>No jobs available</div>
              )}

              {/* Pagination */}
              <div className="flex flex-row mt-16 items-center">
                <p className="mx-8 font-medium">1/1</p>
                <button className="bg-blue-500 text-white font-bold px-3 py-1.5 rounded">
                  Next
                </button>
              </div>

              {/* Featured Companies */}
              <div className="mt-20">
                <div className="flex flex-col md:flex-row items-center gap-4 mx-4 md:gap-x-36 md:mx-10 my-10">
                  <div className="text-center md:text-left">
                    <motion.p className="font-bold text-3xl" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.9 } }}>Featured companies</motion.p>
                    <motion.p className="text-gray-500" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.9 } }}>
                      These are the featured companies. I will come back to edit
                      this text to <br />
                      ensure that it makes sense.
                    </motion.p>
                  </div>
                  <div>
                    <motion.button
                      className="border border-gray-300 rounded px-4 py-2"
                      onClick={() => navigate("/view/companies")}
                      initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.9 } }}
                    >
                      See all companies
                    </motion.button>
                  </div>
                </div>
                <div className="container mx-auto">
                  {featCompany.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                      {featCompany.map((company) => (
                        <motion.div
                          key={company._id}
                          className="bg-gray-300 px-4 py-5 rounded flex items-center gap-4 cursor-pointer"
                          onClick={() => handleCompanyClick(company)}
                          initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.9 } }}
                        >
                          <img
                            className="h-16 w-16 object-cover rounded-lg"
                            src={company.profilePicture}
                            alt={company.name}
                          />
                          <div>
                            <p className="font-bold text-lg">{company.name}</p>
                            <div className="flex items-center mt-2">
                              <p>Learn more</p>
                              <IoIosArrowRoundForward className="h-7 w-7 text-gray-500" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div>No featured companies</div>
                  )}
                  <Postjob />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
