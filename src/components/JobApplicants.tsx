import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getJobById } from "../services/jobService";
import CircularIndeterminate from "./CircularIndeterminate";
import { motion } from "framer-motion";

interface Applicant {
  _id: string;
  name: string;
  email: string;
  phone: string;
  about: string;
  cv: string;
  portfolio: string;
  status: string;
}

function JobApplicants() {
  const [applicants, setApplicants] = useState<Applicant[]>([]); // Array of applicants
  const [job, setJob] = useState<any>(null); // Job details
  const { id } = useParams<{ id: string }>(); // Job ID from the URL
  const [loading, setLoading] = useState<boolean>(true);

  const handleFetchApplicants = async () => {
    try {
      // Fetch all applications
      const response = await axios.get(
        "https://skill-space-backend.onrender.com/application/applications"
      );
      const allApplications = response?.data.applications;
      console.log("Found applications are: ", allApplications);
      console.log(job)

      // Fetch the specific job details
      const jobData = await getJobById(id);

      if (!jobData) {
        console.error("Failed to fetch job details for ID: ", id);
        return;
      }

      console.log("Job details: ", jobData);
      setJob(jobData); // Store the job details in state

      // Filter applicants for the specific job
      const filteredApplicants = allApplications.filter(
        (application: any) => application.service === id
      );

      console.log("Filtered applicants for job: ", filteredApplicants);
      setApplicants(filteredApplicants);
    } catch (error) {
      console.error("Failed to fetch applicants for the job: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchApplicants();
  }, [id]);
  return (
    <div>
      {loading ? (
        <CircularIndeterminate />
      ) : (
        <div className="container mx-auto px-4 mt-16">
          <motion.h1
            className="text-2xl font-bold mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1, transition: { duration: 0.5 } }}
          >
            Job applicants
          </motion.h1>

          {/* Table */}
          <motion.div
            className="overflow-x-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1, transition: { duration: 0.6 } }}
          >
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Name</th>
                  <th className="border border-gray-300 p-2 text-left">
                    Email Address
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Phone number
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    About
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Portfolio
                  </th>
                  <th className="border border-gray-300 p-2 text-left">CV</th>
                  <th className="border border-gray-300 p-2 text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((applicant) => (
                  <tr
                    key={applicant._id}
                    className="odd:bg-white even:bg-gray-50"
                  >
                    <td className="border border-gray-300 p-2">
                      {applicant.name}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {applicant.email}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {applicant.phone}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {applicant.about}
                    </td>
                    <td className="border border-gray-300 p-2">
                      <a href={applicant.portfolio} target="_blank">
                        {applicant.portfolio}
                      </a>
                    </td>
                    <td className="border border-gray-300 p-2">
                      <a
                        href={`https://skill-space-backend.onrender.com/${applicant._id}/download/cv`}
                        download
                      >
                        {applicant.cv}
                      </a>
                    </td>
                    <td className="border border-gray-300 p-2">
                      {applicant.status}
                    </td>
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
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default JobApplicants;
