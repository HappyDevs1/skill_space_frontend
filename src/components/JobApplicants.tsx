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
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Job applicants</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-indigo-50">
            <tr>
              <th className="border border-gray-300 p-2 text-left">Name</th>
              <th className="border border-gray-300 p-2 text-left">Email Address</th>
              <th className="border border-gray-300 p-2 text-left">Phone number</th>
              <th className="border border-gray-300 p-2 text-left">About</th>
              <th className="border border-gray-300 p-2 text-left">Portfolio</th>
              <th className="border border-gray-300 p-2 text-left">CV</th>
              <th className="border border-gray-300 p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant._id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 p-2">{applicant.name}</td>
                <td className="border border-gray-300 p-2">{applicant.email}</td>
                <td className="border border-gray-300 p-2">{applicant.phone}</td>
                <td className="border border-gray-300 p-2">{applicant.about}</td>
                <td className="border border-gray-300 p-2">
                  <a href={applicant.portfolio} target="_blank">{applicant.portfolio}</a>
                </td>
                <td className="border border-gray-300 p-2">{applicant.cv}</td>
                <td className="border border-gray-300 p-2">{applicant.status}</td>
              </tr>
            ))}
            {applicants.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center p-4">
                  This job has no applicants
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JobApplicants;