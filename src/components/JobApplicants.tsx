import { useState } from "react";

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

    } catch (error) {
      console.error("Failed to fetch applicants of a job");
    }
  }
  return (
    <div>

    </div>
  )
}

export default JobApplicants;