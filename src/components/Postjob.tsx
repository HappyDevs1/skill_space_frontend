import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Postjob() {
  const navigate = useNavigate();
  
  const handlePostJob = async () => {
    try {
      navigate("/create/job");
    } catch (error) {
      console.error("Failed to redirect to post job form");
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row mt-24 justify-evenly mb-20">
        <motion.div className="bg-blue-600 px-16 py-10 rounded mb-4 sm:mb-0" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.6 } }}>
          <p className="text-white text-2xl mb-3 font-bold">Post a featured job</p>
          <p className="text-white mb-8">
            You can post a featured job, I will come back <br /> and edit this text to ensure that it makes sense.
          </p>
          <button className="bg-white rounded px-2 py-1" onClick={handlePostJob}>
            Post a featured job
          </button>
        </motion.div>
        <motion.div className="bg-gray-100 px-16 py-10 rounded" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.7 } }}>
          <p className="text-2xl font-bold mb-3">Post a free job</p>
          <p className="text-gray-600 mb-8">
            You can post a free job, I will come back <br /> and edit this text to ensure that it makes sense.
          </p>
          <button className="bg-blue-500 text-white rounded px-2 py-1" onClick={handlePostJob}>
            Post a free job
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Postjob;
