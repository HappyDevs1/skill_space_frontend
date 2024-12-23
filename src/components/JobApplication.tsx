import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getJobById } from "../services/jobService";
import { motion } from "framer-motion";

export default function JobApplication() {
  const [setUser] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [portfolio, setPortfolio] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const { id } = useParams();
  const [service, setService] = useState<any>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const user = localStorage.getItem("user")
    setUser(user);

    if (!name || !email || !phone || !about || !portfolio || !file) {
      alert("Please fill in all fields and attach a file!");
      return;
    }

    const formData = new FormData();
    formData.append("service", service); 
    formData.append("file", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("about", about);
    formData.append("portfolio", portfolio);
    formData.append("user", user);

    

    axios
      .post(`https://skill-space-backend.onrender.com/application/${id}/upload`, formData)
      .then((res) => {
        console.log(res.data);
        alert("File uploaded successfully");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to upload file");
      });
  };

  const fetchJob = async () => {
    try {
      const fetchedJob = await getJobById(id)

      console.log("The job is: ", fetchedJob);
      setService(fetchedJob._id);
    } catch (error) {
      console.error("Failed to fetch job id");
    }
  }

  useEffect(() => {
    fetchJob();
  }, [id]);

  return (
    <div className="flex justify-center">
      <motion.div className="flex flex-col items-start gap-8 border-2 my-[5%] px-[5%] py-[3%] w-full sm:w-auto" initial={{ scale: 0.9 }}
                animate={{ scale: 1, transition: { duration: 0.4 } }}>
        <form onSubmit={handleSubmit} className="w-full">
          <p className="font-bold text-3xl text-center sm:text-left">Application form</p>
          <div className="flex flex-col gap-5">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                onChange={(event) => setName(event.target.value)}
                placeholder="David"
                value={name}
                className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                placeholder="davidkoen@gmail.com"
                value={email}
                className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-2">
              <label>Phone number</label>
              <input
                onChange={(event) => setPhone(event.target.value)}
                placeholder="067 180 6200"
                value={phone}
                className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
              />
            </div>

            {/* About Field */}
            <div className="flex flex-col gap-2">
              <label>About</label>
              <input
                type="text"
                onChange={(event) => setAbout(event.target.value)}
                placeholder="Software engineer with 2 years work experience..."
                value={about}
                className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
              />
            </div>

            {/* File Upload */}
            <div className="flex flex-col gap-2">
              <label>Attach CV</label>
              <input
                type="file"
                onChange={(event) =>
                  setFile(event.target.files ? event.target.files[0] : null)
                }
                className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
              />
            </div>

            {/* Portfolio Field */}
            <div className="flex flex-col gap-2">
              <label>Portfolio Link</label>
              <input
                onChange={(event) => setPortfolio(event.target.value)}
                placeholder="https://example.portfolio.com"
                value={portfolio}
                className="border-2 rounded-md pl-2 w-full sm:w-96 h-9"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold flex justify-end self-end"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
