import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobById } from "../services/jobService";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { IoMdTime } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

interface Freelancer {
  _id: string;
  name: string;
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
  freelancer: Freelancer;
}

function ViewJob() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobById(id);
        setJob(data);
        console.log("Viewed job: ", data)
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="mx-36 my-8 flex">
      {
        job ? (
          <div className="flex flex-col w-full">
            <div className="flex items-center">
            <IoIosArrowRoundBack className="h-7 w-7 text-gray-500" onClick={handleBack} />
            <p>See all jobs</p>
            </div>
            <div className="flex justify-between my-10 w-9/10">
            <div className="border-2">
              <div className="flex flex-col px-8 py-7 bg-gray-100">
                <div className="flex gap-5">
                  <div className="bg-gray-300 items-center px-5 py-5 rounded-lg">
                    <p>P.P</p>
                  </div>
                  <div className="flex flex-col">
                    <p>{job.freelancer.name}</p>
                    <p>{job.title}</p>
                  </div>
                </div>
                <div className="flex my-5">
                <p className="text-gray-500">{job.freelancer.name} is looking for a {job.title} to join their team.</p>
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
                  <IoMdTime className="text-blue-600 font-bold"/>
                  {/* Will come back to edit this to make it dynamic */}
                  <p>Full Time</p>
                  </div>
                  <div className="flex items-center gap-1 border-2 rounded px-1 py-1 text-xs">
                  <RiMoneyDollarCircleLine className="text-blue-600" />
                  <p>R {job.price} ZAR</p>
                  </div>
                </div>
                </div>
                <div className="flex flex-col px-10">
                  <div className="flex justify-between">
                    <p>Job description</p>
                    <p><span className="font-bold">Posted on:</span>{new Date(job.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}</p>
                  </div>
                </div>
            </div>
            <div className="flex 1/10">
                <p>Hello world</p>
              </div>
            <div className="">
              </div>
            </div>
          </div>
        ) : (
          <p>Job not found</p>
        )
      }
      </div>
    </div>
  );
}

export default ViewJob;