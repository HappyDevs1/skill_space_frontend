import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../services/jobService";

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
  const { id } = useParams<{ id: string }>(); // Get the job ID from the URL
  const [job, setJob] = useState<Job | null>(null); // Explicitly typing the state

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobById(id); // Fetch the job details using the job ID
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

  return (
    <div>
      {
        job ? (
          <div>
            <h1>{job.title}</h1>
            <p>{job.description}</p>
            <p>{job.department}</p>
            <p>Freelancer: {job.freelancer.name}</p>
            {/* Display more details as needed */}
          </div>
        ) : (
          <p>Job not found</p>
        )
      }
    </div>
  );
}

export default ViewJob;
