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

  return (
    <div>
      {
        loading ? (
          <div>
          <CircularIndeterminate />
          </div>
        ) :
        (
          <div className="mx-36 my-8 flex">
        {job ? (
          <div className="flex flex-col w-full">
            {/* Back button */}
            <div className="flex items-center">
              <IoIosArrowRoundBack className="h-7 w-7 text-gray-500 cursor-pointer" onClick={handleBack} />
              <p>See all jobs</p>
            </div>

            {/* Main content container */}
            <div className="flex my-10 justify-between">
              {/* Left side (70%) */}
              <div className="border-2 w-[70%]">
                <div className="flex flex-col px-8 py-7 bg-gray-100">
                  <div className="flex gap-5">
                    <div className="bg-blue-100 px-3 py-3 rounded-lg">
                  <img src={job.company.profilePicture} className="h-16 w-auto rounded-lg"></img>
                  </div>
                    <div className="flex flex-col justify-center gap-1">
                      <p className="font-bold text-gray-500">{job.company.name}</p>
                      <p className="font-bold text-xl">{job.title}</p>
                    </div>
                  </div>

                  <div className="flex my-5">
                    <p className="text-gray-500">{job.company.name} is looking for a {job.title} to join their team.</p>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex items-center gap-1 border-2 rounded px-1 py-1 text-xs">
                      <CiLocationOn className="text-blue-600" />
                      <p>{job.location}</p>
                    </div>
                    <div className="flex items-center gap-1 border-2 rounded px-1 py-1 text-xs">
                      <IoBriefcaseOutline className="text-blue-600" />
                      <p>{job.department}</p>
                    </div>
                    <div className="flex items-center gap-1 border-2 rounded px-1 py-1 text-xs">
                      <VscGraph className="text-blue-600" />
                      <p>{job.level}</p>
                    </div>
                    <div className="flex items-center gap-1 border-2 rounded px-1 py-1 text-xs">
                      <IoMdTime className="text-blue-600 font-bold" />
                      {/* Will come back to edit this to make it dynamic */}
                      <p>Full Time</p>
                    </div>
                    <div className="flex items-center gap-1 border-2 rounded px-1 py-1 text-xs">
                      <RiMoneyDollarCircleLine className="text-blue-600" />
                      <p>R {job.price} ZAR</p>
                    </div>
                  </div>
                </div>

                {/* Job description */}
                <div className="flex flex-col px-10">
                  <div className="flex justify-between mt-20 mb-7">
                    <p className="font-bold text-xl">Job description</p>
                    <div className="flex items-center gap-1">
                    <CiCalendar className="text-xl"/>
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
                  <p className="text-gray-500">{job.description} This is a test message, I will come back to it to edit it. This is just a test message I will come back to edit it later on. This is just a test message I will come back to it later on to make it make much more sense.</p>
                </div>
              </div>

              {/* Right side (30%) */}
              <div className="flex flex-col w-[30%] p-4 gap-5">
                <div className="flex flex-col gap-4 border-2 px-5 py-5 rounded-lg">
                  <div className="flex">
                    <img src={job.company.profilePicture} className="h-10 w-auto rounded-lg"></img>
                  </div>
                  <p className="font-bold text-xl">About {job.company.name}</p>
                  <p className="text-gray-500">{job.company.about}</p>
                  <button className="bg-gray-100 border-2 font-bold px-3 py-1 rounded">View Company</button>
                </div>
                <div className="flex flex-col gap-4 border-2 px-5 py-5 rounded-lg">
                  <div className="flex">
                    <div className="border-2 rounded-lg px-1 py-1">
                    <MdOutlinePostAdd className="text-4xl text-blue-500"/>
                    </div>
                  </div>
                  <p className="font-bold text-xl">Post a job today</p>
                  <p className="text-gray-500">This is the about information about this company. This is still a test message I will come back to it to make it make sense though.</p>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded font-bold">Post a job</button>
                  <p className="text-gray-500 underline self-center text-lg cursor-pointer">or post a free job</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="font-bold text-xl">More job openings</p>
                <button className="bg-gray-100 border-2 px-3 py-1 rounded font-bold text-sm">See all jobs</button>
              </div>
          <div className="flex justify-evenly gap-10 my-7">
          <div className="flex flex-col border-2 rounded-lg px-10 py-10 w-[50%] gap-5 cursor-pointer">
              <div className="flex items-center gap-5">
              <div className="flex">
              <img src={job.company.profilePicture} className="h-14 rounded-xl"></img>
              </div>
              <div>
                <p className="font-bold text-gray-400">Microsoft</p>
                <p className="font-bold text-lg">Systems Administator</p>
              </div>
              </div>
              <div>
                <p className="text-gray-500">This is a test message, but I will come back to it to edit it to make it make sense. But for now I will use it just to test.</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-1 text-sm">
                <div className="flex gap-2 border-2 rounded px-2 items-center">
                  <CiLocationOn />
                  <p>Location</p>
                </div>
                <div className="flex gap-2 border-2 rounded px-2 items-center">
                <VscGraph />
                  <p>Level</p>
                </div>
                <div className="flex gap-2 border-2 rounded px-2 items-center">
                  <IoBriefcaseOutline />
                  <p>Department</p>
                </div>
              </div>
              <div>
                <button className="bg-gray-100 px-3 py-1 rounded border-2 text-sm font-bold">Apply now</button>
              </div>
              </div>
            </div>
            <div className="flex flex-col border-2 rounded-lg px-10 py-10 w-[50%] gap-5 cursor-pointer">
              <div className="flex items-center gap-5">
              <div className="flex">
              <img src={job.company.profilePicture} className="h-14 rounded-xl"></img>
              </div>
              <div>
                <p className="font-bold text-gray-400">Google</p>
                <p className="font-bold text-lg">Mobile product manager</p>
              </div>
              </div>
              <div>
                <p className="text-gray-500">This is a test message, but I will come back to it to edit it to make it make sense. But for now I will use it just to test.</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-1 text-sm">
                <div className="flex gap-2 border-2 rounded px-2 items-center">
                  <CiLocationOn />
                  <p>Location</p>
                </div>
                <div className="flex gap-2 border-2 rounded px-2 items-center">
                <VscGraph />
                  <p>Level</p>
                </div>
                <div className="flex gap-2 border-2 rounded px-2 items-center">
                  <IoBriefcaseOutline />
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
          </div>
        ) : (
          <p>Job not found</p>
        )}
      </div>
        )
      }
      
    </div>
  );
}

export default ViewJob;