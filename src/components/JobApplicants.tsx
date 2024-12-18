import { useState, useEffect } from "react";
import axios from "axios";

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
  const [applicants, seApplicants] = useState<Applicant | null>(null);

  const handleFetchApplicants = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/application/applications`);
      console.log(response);

    } catch (error) {1
      console.error("Failed to fetch applicants of a job");
    }
  }

  useEffect(() => {
    handleFetchApplicants();
  }, [])
  return (
    <div>

    </div>
  )
}

export default JobApplicants;