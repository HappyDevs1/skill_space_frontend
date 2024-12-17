import { useState, useEffect } from "react";

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
  const [jobs, setJobs] = useState<Job | null>(null);

  const handleFetchJobs = async () => {
    try {
      const loggedInCompany: any = localStorage.getItem("user");
      console.log("Logged in user: ", loggedInCompany);
      setCompany(loggedInCompany);
      
    } catch (error) {
      console.error("Failed to fetch jobs under this company");
    }
  }

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