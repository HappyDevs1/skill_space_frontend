import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getJobById } from "../services/jobService";

interface Applicant {
  name: string,
  email: string,
  phone: string,
  about: string,
  cv: string,
  portfolio: string,
  status: string,
}

function JobApplicants () {
  const [applicants, setApplicants] = useState<Applicant[]>([]); // Array of applicants
  const [job, setJob] = useState<any>(null); // Job details
  const { id } = useParams<{ id: string }>(); // Job ID from the URL

  const handleFetchApplicants = async () => {
    try {
      // Fetch all applications
      const response = await axios.get("http://localhost:4000/application/applications");
      const allApplications = response?.data.applications;
      console.log("Found applications are: ", allApplications)

      // Fetch the specific job details
      const jobData = await getJobById(id);

      if (!jobData) {
        console.error("Failed to fetch job details for ID: ", id);
        return;
      }

      console.log("Job details: ", jobData);
      setJob(jobData); // Store the job details in state

      // Filter applicants for the specific job
      const filteredApplicants = allApplications.filter((application) => application.service === id);

      console.log("Filtered applicants for job: ", filteredApplicants);
      setApplicants(filteredApplicants);
    } catch (error) {
      console.error("Failed to fetch applicants for the job: ", error);
    }
  };

  useEffect(() => {
    handleFetchApplicants();
  }, [id]);
  return (
    <div>

    </div>
  )
}

export default JobApplicants;