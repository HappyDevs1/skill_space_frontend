import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Job {
  title: string;
  description: string;
  price: string;
  location: string;
  level: string;
  department: string;
}
function JobApplicationForm() {
  const [job, setJobs] = useState<Job | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [about, setAbout] = useState<string>("");

  const handleFetchJob = async () => {
    try {
    } catch (error) {
      console.error("Failed to fetch viewed job");
    }
  };
  useEffect(() => {});
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-start gap-8 border-2 my-[5%] px-[5%] py-[3%]">
        <p className="font-bold text-3xl">Application form</p>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <input placeholder="David" value={name} className="border-2 rounded-md pl-2 w-96 h-9" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input placeholder="davidkoen@gmail.com" value={email} className="border-2 rounded-md pl-2 w-96 h-9" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Phone number</label>
            <input placeholder="067 180 6200" value={phone} className="border-2 rounded-md pl-2 w-96 h-9" />
          </div>
          <div className="flex flex-col gap-2">
            <label>About</label>
            <input placeholder="Backend software engineer..." value={about} className="border-2 rounded-md pl-2 w-96 h-9" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApplicationForm;
