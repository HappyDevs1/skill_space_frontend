import { useState, useEffect } from "react";
import { getAllJobs } from "../services/jobService";

interface Company {
  name: string,
  email: string,
  about: string,
  profilePicture: string,
}

interface Job {
  title: string,
  description: string,
  price: string,
  location: string,
  department: string,
  service: string
}
function CompanyJobs () {
  const [company, setCompany] = useState<Company | null>(null);
  const [companyJobs, setCompanyJobs] = useState<Job | []>([]);

  const handleFetchJobs = async () => {
    try {
      const loggedInCompanyId = localStorage.getItem("user"); 
      console.log("Logged in company ID: ", loggedInCompanyId);
  
      const response = await getAllJobs();
      console.log("API response: ", response);
  
      // Safeguard: Ensure the 'service' key is present and is an array
      const allJobs = response?.service;
      if (!Array.isArray(allJobs)) {
        console.error("Expected 'service' to be an array, but got: ", allJobs);
        return;
      }
  
      const companiesJobs = allJobs.filter(
        (job) => String(job.company._id) === loggedInCompanyId
      );
  
      console.log("Matching jobs are: ", companiesJobs);
  
      setCompanyJobs(companiesJobs);
    } catch (error) {
      console.error("Failed to fetch jobs under this company: ", error);
    }
  };
  

  useEffect(() => {
    handleFetchJobs();
  }, [])

  return (
    <div>
      {/* This is the component I will use to display the jobs of a company
      Function 1
      1. Get both Company id and get all jobs by id
      2. If an id match then return the job
      3. Display the job

      function 2
      1. Get the job id then get all application by id
      2.If the id match then return the application details
      3. Display all the applications */}
      
    </div>
  )
}

export default CompanyJobs;