import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobById } from "../services/jobService";
import CircularIndeterminate from "./CircularIndeterminate";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { IoMdTime } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlinePostAdd } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

interface Company {
  _id: string;
  name: string;
  about: string;
  profilePicture: string;
}

interface Job {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  level: string;
  department: string;
  company: Company;
  createdAt: Date
}

function ViewJob() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true)
      try {
        const data = await getJobById(id);
        setJob(data);
        setLoading(false)
        console.log("Viewed job: ", data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return <CircularIndeterminate />;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleApplyJob = async () => {
    try {
      navigate(`/job/apply/${job._id}`);
    } catch (error) {
      console.error("Error in applying for a job");
    }
  }

  return (
<div>
  {
    loading ? (
      <div>
        <CircularIndeterminate />
      </div>
    ) :
    (
      <div className="mx-4 my-4 sm:mx-36 sm:my-8 flex flex-col sm:flex-row">
        {job ? (
          <div className="flex flex-col sm:w-7/10">
            {/* Back button */}
            <div className="flex items-center">
              <IoIosArrowRoundBack className="h-7 w-7 text-gray-500 cursor-pointer" onClick={handleBack} />
              <p>See all jobs</p>
            </div>

            {/* Main content container */}
            <div className="flex flex-col sm:flex-row my-10 justify-between">
              {/* Left side (Main content) */}
              <div className="border-2 w-full sm:w-[70%]">
                <div className="flex flex-col px-8 py-7 bg-gray-100">
                  <div className="flex gap-5">
                    <div className="bg-blue-100 px-3 py-3 rounded-lg">
                      <img src={job.company.profilePicture} className="h-16 w-auto rounded-lg" />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                      <p className="font-bold text-gray-500">{job.company.name}</p>
                      <p className="font-bold text-xl">{job.title}</p>
                    </div>
                  </div>

                  <div className="flex my-5">
                    <p className="text-gray-500">{job.company.name} is looking for a {job.title} to join their team.</p>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <div className="flex items-center gap-1 border-2 rounded px-1 py-1 text-xs">
                      <CiLocationOn className="text-blue-600 text-base sm:text-lg" />
                      <p>{job.location}</p>
                    </div>
                    <div className="flex items-center gap-1 border-2 rounded px-1 py-1 text-xs">
                      <IoBriefcaseOutline className="text-blue-600 text-base sm:text-lg" />
                      <p>{job.department}</p>
                    </div>
                    <div className="flex items-center gap-1 border-2 rounded px-1 py-1 text-xs">
                      <VscGraph className="text-blue-600 text-base sm:text-lg" />
                      <p>{job.level}</p>
                    </div>
                    <div className="flex items-center gap-1 border-2 rounded px-1 py-1 text-xs">
                      <IoMdTime className="text-blue-600 font-bold text-base sm:text-lg" />
                      <p>Full Time</p>
                    </div>
                    <div className="flex items-center gap-1 border-2 rounded px-1 py-1 text-xs">
                      <RiMoneyDollarCircleLine className="text-blue-600 text-base sm:text-lg" />
                      <p>R {job.price} ZAR</p>
                    </div>
                  </div>
                </div>

                {/* Job description */}
                <div className="flex flex-col px-10">
                  <div className="flex justify-end my-[8%]">
                    <button onClick={handleApplyJob} className="bg-blue-600 text-white px-[1%] py-[1%] rounded-lg font-bold">Apply now</button>
                  </div>
                  <div className="flex justify-between mt-5 mb-7">
                    <p className="font-bold text-xl">Job description</p>
                    <div className="flex items-center gap-1">
                      <CiCalendar className="text-xl sm:text-2xl" />
                      <p className="text-gray-500">
                        <span className="font-bold text-black">Posted on:</span>{" "}
                        {new Date(job.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500">{job.description}</p>
                </div>
              </div>

              {/* Right side (Sidebar) */}
              <div className="flex flex-col w-full sm:w-[30%] p-4 gap-5">
                <div className="flex flex-col gap-4 border-2 px-5 py-5 rounded-lg">
                  <div className="flex">
                    <img src={job.company.profilePicture} className="h-10 w-auto rounded-lg" />
                  </div>
                  <p className="font-bold text-xl">About {job.company.name}</p>
                  <p className="text-gray-500">{job.company.about}</p>
                  <button className="bg-gray-100 border-2 font-bold px-3 py-1 rounded">View Company</button>
                </div>
                <div className="flex flex-col gap-4 border-2 px-5 py-5 rounded-lg">
                  <div className="flex">
                    <div className="border-2 rounded-lg px-1 py-1">
                      <MdOutlinePostAdd className="text-4xl text-blue-500 sm:text-5xl" />
                    </div>
                  </div>
                  <p className="font-bold text-xl">Post a job today</p>
                  <p className="text-gray-500">This is the about information about this company.</p>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded font-bold" onClick={() => {navigate("/create/job")}}>Post a job</button>
                  <p className="text-gray-500 underline self-center text-lg cursor-pointer" onClick={() => {navigate("/create/job")}}>or post a free job</p>
                </div>
              </div>
            </div>

            {/* More job openings */}
            <div className="flex flex-col sm:flex-row justify-between">
              <p className="font-bold text-xl">More job openings</p>
              <button className="bg-gray-100 border-2 px-3 py-1 rounded font-bold text-sm" onClick={() => {navigate("/")}}>See all jobs</button>
            </div>

            <div className="flex flex-col sm:flex-row justify-evenly gap-10 my-7">
              {/* Job listing 1 */}
              <div className="flex flex-col border-2 rounded-lg px-10 py-10 w-full sm:w-[48%] gap-5 cursor-pointer">
                <div className="flex items-center gap-5">
                  <img src={job.company.profilePicture} className="h-14 rounded-xl" />
                  <div>
                    <p className="font-bold text-gray-400">Microsoft</p>
                    <p className="font-bold text-lg">Systems Administator</p>
                  </div>
                </div>
                <p className="text-gray-500">This is a test message, but I will come back to it to edit it.</p>
                <div className="flex justify-between">
                  <div className="flex gap-2 flex-wrap">
                    <div className="flex gap-2 border-2 rounded px-2 items-center">
                      <CiLocationOn className="text-base sm:text-lg" />
                      <p>Location</p>
                    </div>
                    <div className="flex gap-2 border-2 rounded px-2 items-center">
                      <VscGraph className="text-base sm:text-lg" />
                      <p>Level</p>
                    </div>
                    <div className="flex gap-2 border-2 rounded px-2 items-center">
                      <IoBriefcaseOutline className="text-base sm:text-lg" />
                      <p>Department</p>
                    </div>
                  </div>
                  <div>
                  <button className="bg-gray-100 px-3 py-1 rounded border-2 text-sm font-bold">Apply now</button>
                  </div>
                </div>
              </div>

              {/* Job listing 2 */}
              <div className="flex flex-col border-2 rounded-lg px-10 py-10 w-full sm:w-[48%] gap-5 cursor-pointer">
                <div className="flex items-center gap-5">
                  <img src={job.company.profilePicture} className="h-14 rounded-xl" />
                  <div>
                    <p className="font-bold text-gray-400">Google</p>
                    <p className="font-bold text-lg">Mobile Product Manager</p>
                  </div>
                </div>
                <p className="text-gray-500">This is a test message, but I will come back to it to edit it.</p>
                <div className="flex justify-between">
                  <div className="flex gap-2 flex-wrap">
                    <div className="flex gap-2 border-2 rounded px-2 items-center">
                      <CiLocationOn className="text-base sm:text-lg" />
                      <p>Location</p>
                    </div>
                    <div className="flex gap-2 border-2 rounded px-2 items-center">
                      <VscGraph className="text-base sm:text-lg" />
                      <p>Level</p>
                    </div>
                    <div className="flex gap-2 border-2 rounded px-2 items-center">
                      <IoBriefcaseOutline className="text-base sm:text-lg" />
                      <p>Department</p>
                    </div>
                  </div>
                  <div>
                  <button className="bg-gray-100 px-3 py-1 rounded border-2 text-sm font-bold">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>No job found</div>
        )}
      </div>
    )
  }
</div>

  );
}

export default ViewJob;