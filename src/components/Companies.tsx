import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCompany } from "../services/companyService";
import Postjob from "./Postjob";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";

interface Company {
  _id: string;
  name: string;
  email: string;
  about: string;
  profilePicture: string;
}

function Companies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getCompany();
        setCompanies(data.company);
        console.log("Fetched companies", data);
      } catch (error) {
        console.error("Failed to fetch companies");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const navigate = useNavigate();

  const handleClickCompany = async (company: any) => {
    try {
      console.log("Clicked company: ", company._id);
      navigate(`/about/company/${company._id}`);
    } catch (error) {
      console.error("Failed to display company information");
    }
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col justify-center">
          <motion.div className="flex items-center gap-3 ml-20 mt-8" initial={{ scale: 0.9 }}
                animate={{ scale: 1, transition: { duration: 0.3 } }}>
            <IoIosArrowRoundBack className="h-7 w-7 text-gray-500 cursor-pointer"onClick={() => navigate(-1)}/>
            <p>Back to Home</p>
          </motion.div>
          <div className="mt-20 flex flex-col items-center">
            <motion.p className="font-bold text-4xl" initial={{ scale: 0.5 }}
                animate={{ scale: 1, transition: { duration: 0.4 } }}>Companies</motion.p>
            <motion.p className="text-gray-500 mt-6" initial={{ scale: 0.5 }}
                animate={{ scale: 1, transition: { duration: 0.6 } }}>
              This is all the companies I will come back later to edit this text
              so that it makes sense. <br /> This is the companies that we are
              working with. I will come back later to edit this text.
            </motion.p>
            {companies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                {companies.map((company) => (
                  <motion.div
                    key={company._id}
                    className="flex flex-col items-start px-6 py-5 w-full max-w-xs border rounded shadow hover:shadow-lg transition-shadow"
                    onClick={() => handleClickCompany(company)}
                    initial={{ scale: 0.9 }}
                animate={{ scale: 1, transition: { duration: 0.8 } }}
                  >
                    <img
                      src={company.profilePicture}
                      alt={`${company.name} Logo`}
                      className="w-21 h-16 rounded-full mb-4"
                    />
                    <h2 className="font-bold text-xl mb-2">{company.name}</h2>
                    <p className="text-gray-600 mb-4">{company.name} is one of the companies in partnership with SkillSpace. Click here to view more about {company.name}.</p>
                    <div className="border-2 rounded-md">
                    <IoIosArrowRoundForward className="h-7 w-7 text-gray-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p>No companies found</p>
            )}
          </div>
          <Postjob />
        </div>
      )}
    </div>
  );
}

export default Companies;
