import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Job {
  title: string,
  description: string,
  price: string,
  location: string,
  level: string,
  department: string,
}
function JobApplicationForm () {
  const [job, setJobs] = useState<Job | null>(null);

  const handleFetchJob = async () => {
    try {
      
    } catch (error) {
      console.error("Failed to fetch viewed job")
    }
  }
  useEffect(() => {
    
  })
  return (
    <div>
      Job Application form
    </div>
  )
}

export default JobApplicationForm;