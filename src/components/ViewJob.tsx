import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobById } from "../services/jobService";
import { IoIosArrowRoundBack } from "react-icons/io";

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
      <div className="mx-36 my-8">
      {
        job ? (
          <div>
            <div className="flex items-center">
            <IoIosArrowRoundBack className="h-7 w-7 text-gray-500" onClick={handleBack} />
            <p>See all jobs</p>
            </div>
            <h1>{job.title}</h1>
            <p>{job.description}</p>
            <p>{job.department}</p>
            <p>Freelancer: {job.freelancer.name}</p>
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