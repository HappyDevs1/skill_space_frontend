import { useState, useEffect } from "react";
import { getAllJobs } from "../services/jobService";
import { FaSearch, FaCloud, FaCentercode } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Select from "react-select";
import { VscGraph } from "react-icons/vsc";
import { IoBriefcaseOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { DiCompass } from "react-icons/di";
import { IoIosArrowRoundForward } from "react-icons/io";

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
  ]

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

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getAllJobs();
        console.log('Fetched Jobs:', response); // Add this line to check the response structure
        if (response && response.service) {
          setJobs(response.service);
        } else {
          setJobs([]); // In case there are no jobs or the structure is unexpected
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to fetch jobs.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center min-h-screen mb-52">
      <div className="background w-full">
        <div className="m-20 self-start">
          <p className="font-bold text-sky-500">TOP CAREER OPPORTUNITIES</p>
          <p className="text-4xl font-semibold mt-2 mb-5">
            Find your ideal job <br /> across all industries
          </p>
          <p className="text-slate-600">
            Explore a diverse array of career opportunities in <br /> multiple
            sectors. Whether you're seeking <br /> a position in technology,
            healthcare, finance, <br /> or any other industry, we have the
            perfect role <br /> to match your skills and aspirations.
          </p>
          <div className="flex items-center mt-4 text-slate-500 font-bold">
            <DiCompass className="mr-2" />
            <p>agency</p>
            <FaCloud className="mx-2" />
            <p>application</p>
            <GrTechnology className="mx-2" />
            <p>business</p>
            <FaCentercode className="mx-2" />
            <p>company</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full flex-grow">
          <div className="flex items-center border border-gray-400 rounded p-4 w-max">
            <div className="flex items-center rounded border border-gray-300">
              <div className="flex items-center p-2">
                <FaSearch className="text-grey-500" />
              </div>
              <input
                type="text"
                placeholder="Search for jobs"
                className="flex-grow py-2 px-2 focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
                Search
              </button>
            </div>
            <div className="flex items-center rounded ml-4 border border-gray-300">
              <div className="flex items-center px-2">
                <CiLocationOn className="text-gray-500" />
              </div>
              <div className="w-48">
                <Select
                  options={locationDropdown}
                  placeholder="Location"
                  classNamePrefix="react-select"
                  styles={customStyles}
                />
              </div>
            </div>
            <div className="flex items-center rounded ml-4 border border-gray-300">
              <div className="flex items-center px-2">
                <VscGraph className="text-gray-500" />
              </div>
              <div className="w-48">
                <Select
                  options={levelDropdown}
                  placeholder="Job level"
                  classNamePrefix="react-select"
                  styles={customStyles}
                />
              </div>
            </div>
            <div className="flex items-center rounded ml-400 border border-gray-300">
              <div className="flex items-center px-2">
                <IoBriefcaseOutline className="text-gray-500" />
              </div>
              <div className="w-48">
                <Select
                  options={departmentDropdown}
                  placeholder="Department"
                  classNamePrefix="react-select"
                  styles={customStyles}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full flex-grow mt-28">
          <p className="font-semibold text-xl mb-6">Feautured jobs</p>
          <div className="flex border rounded border-gray-400 px-3 py-3 w-auto">
            <div className="flex rounded items center justify-center w-full flex-grow bg-sky-100 px-11 py-14">
              <p>P.Pic</p>
            </div>
            <div className="pl-7 pr-20">
              <p className="font-semibold text-gray-400 my-2">Facebook</p>
              <p className="font-bold text-xl">Software engineer</p>
              <div className="flex gap-2.5 mt-4">
                <div className="flex items-center border border-gray-300 rounded p-1">
                  <CiLocationOn className="text-blue-500 mr-1.5 h-3 w-3" />
                  <p className="text-xs font-medium">Remote</p>
                </div>
                <div className="flex items-center border border-gray-300 rounded p-1">
                  <VscGraph className="text-blue-500 mr-1.5 h-3 w-3" />
                  <p className="text-xs font-medium">Senior</p>
                </div>
                <div className="flex items-center border border-gray-300 rounded p-1">
                  <IoBriefcaseOutline className="text-blue-500 mr-1.5 h-3 w-3" />
                  <p className="text-xs font-medium">Technology</p>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-gray-400 rounded">
            <IoIosArrowRoundForward className="h-7 w-7 text-gray-500" />
            </div>
            </div>
          </div>
        </div>
        {/* Displaying latest jobs */}
        <div className="flex flex-col items-center justify-center w-full flex-grow mt-24">
          <p className="font-semibold text-xl mb-6">Latest jobs</p>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job._id} className="flex border rounded border-gray-400 px-3 py-3 w-auto">
                <div className="flex rounded items center justify-center w-full flex-grow bg-sky-100 px-11 py-14">
                  <p>P.Pic</p>
                </div>
                <div className="pl-7 pr-20">
                  <p className="font-semibold text-gray-400 my-2">Company Name</p>
                  <p className="font-bold text-xl">{job.title}</p>
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
                <div>
                  <div className="border border-gray-400 rounded">
                <IoIosArrowRoundForward className="h-7 w-7 text-gray-500" />
                </div>
                </div>
              </div>
            ))
          ) : (
            <div>No jobs available</div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Home;