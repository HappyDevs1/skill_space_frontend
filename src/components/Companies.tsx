import { useEffect, useState } from "react";
import { getCompany } from "../services/companyService";
import Postjob from "./Postjob";
import { IoIosArrowRoundForward } from "react-icons/io";

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

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col justify-center">
          <div className="mt-20 flex flex-col items-center">
            <p className="font-bold text-4xl">Companies</p>
            <p className="text-gray-500 mt-6">
              This is all the companies I will come back later to edit this text
              so that it makes sense. <br /> This is the companies that we are
              working with. I will come back later to edit this text.
            </p>
            {companies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                {companies.map((comp) => (
                  <div
                    key={comp._id}
                    className="flex flex-col items-start px-6 py-5 w-full max-w-xs border rounded shadow hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={comp.profilePicture}
                      alt={`${comp.name} Logo`}
                      className="w-21 h-16 rounded-full mb-4"
                    />
                    <h2 className="font-bold text-xl mb-2">{comp.name}</h2>
                    <p className="text-gray-600 mb-4">{comp.name} is one of the companies in partnership with SkillSpace. Click here to view more about {comp.name}.</p>
                    <div className="border-2 rounded-md">
                    <IoIosArrowRoundForward className="h-7 w-7 text-gray-500" />
                    </div>
                  </div>
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
