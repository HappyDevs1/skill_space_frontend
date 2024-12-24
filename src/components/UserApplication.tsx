import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { motion } from "framer-motion"

interface Application {
  _id: string,
  name: string,
  email: string,
  about: string,
  phone: string,
}

function UserApplication () {
  const [applications, setApplications] = useState<Application | null>(null);
  const { id } = useParams();

  const fetchApplication = async () => {
    try {
      const loggedInUser = localStorage.getItem("user");
      console.log(loggedInUser);

      const applications = await axios.get(`http://localhost:4000/application/${id}`)
      console.log(applications)

    } catch (error) {
      console.error("Failed to fetch application", error);
    }
  }
  useEffect(() => {
    fetchApplication()
  }, [])
  return (
    <div className="flex justify-center align-center">
      <motion.p className="font-bold text-xl mt-10" initial={{ scale: 0.9 }}
      animate={{ scale: 1, transition: { duration: 0.2 } }}>Your job applications are empty.</motion.p>
    </div>
  )
}

export default UserApplication;