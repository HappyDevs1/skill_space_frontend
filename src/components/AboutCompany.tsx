import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getCompanyById, getFeaturedCompany } from "../services/companyService";
import Postjob from "./Postjob";
import CircularIndeterminate from "./CircularIndeterminate";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

interface Company {
  _id: string;
  name: string;
  email: string;
  role: string;
  profilePicture: string;
}

// interface Job {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   location: string;
//   level: string;
//   department: string;
//   freelancer: Freelancer;
//   createdAt: Date
// }

function AboutCompany() {
  const image = "https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/64b96d206c0fd7f0fadd9e49_facebook-cover-image-jobboardly-webflow-ecommerce-template-p-1080.png";

  const [company, setCompany] = useState<Company | null>(null)
  const [activeButton, setActiveButton] = useState<string>("jobs");
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  // const { id } = useParams();

  useEffect(() => {
    if (!id) {
      console.error("No company ID provided in route params.");
      return;
    }

    const fetchedFeaturedCompany = async () => {
      setLoading(true);
      try {
        const data = await getCompanyById(id);
        setCompany(data);
        console.log("Viewed Company: ", data);
      } catch (error) {
        console.error("Error fetching company information: ", error)
      } finally {
        setLoading(false);
      }
    };

    fetchedFeaturedCompany();
  }, [id])

  const handleButtonClick = (button: string) => {
    setActiveButton(button)
  };

  return (
<div>
  {loading ? (
    <CircularIndeterminate />
  ) : company ? (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full max-w-4xl border-2 rounded-xl my-6 p-4 sm:p-6 lg:py-8 lg:px-10">
        {/* Company Image */}
        <div className="w-full">
          <img src={image} className="w-full rounded-t-xl object-cover" alt="Company banner" />
        </div>

        {/* Profile Picture and Company Details */}
        <div className="w-full relative flex flex-col items-center mt-[-4rem] sm:mt-[-6rem]">
          {/* Profile Picture */}
          <div className="w-10 h-10 mt-20 md:w-14 md:h-14 md:mt-28 lg:w-20 lg:h-20 lg:mt-12 rounded-xl overflow-hidden shadow-lg border border-gray-300 lg:self-start lg:ml-10">
            <img src={company.profilePicture} className="w-full h-full object-cover" alt="Company profile" />
          </div>

          {/* Company Info */}
          <div className="w-full mt-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-center lg:text-left">
              <p className="font-bold text-xl sm:text-2xl lg:text-3xl">{company.name}</p>
              <button className="bg-gray-100 px-3 py-2 rounded font-bold border border-gray-200 text-sm hover:bg-gray-200">
                Visit Website
              </button>
            </div>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              This is a test message I will come back later on to edit it so that it makes sense.
              <br />
              I will come back at a later stage to edit it so it makes sense.
            </p>
          </div>
        </div>

        {/* Location and Size */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-5 px-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
            <CiLocationOn />
            <p>Gauteng</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
            <GoPerson />
            <p>100 - 1,000</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-8 mt-6 border-b-2 border-gray-300 w-full px-4">
          <button
            onClick={() => handleButtonClick("jobs")}
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base ${activeButton === "jobs" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
          >
            Company Jobs
          </button>
          <button
            onClick={() => handleButtonClick("about")}
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base ${activeButton === "about" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
          >
            About the Company
          </button>
          <button
            onClick={() => handleButtonClick("perks")}
            className={`px-2 sm:px-4 py-2 text-sm sm:text-base ${activeButton === "perks" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
          >
            Company Perks & Benefits
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6 px-4 sm:px-6 lg:px-8 text-sm sm:text-base">
          {activeButton === "jobs" && (
            <div className="flex flex-col gap-5 text-gray-500">
              <p className="font-bold text-lg sm:text-xl text-black">About Company</p>
              <p>{company.about}</p>
              <p className="font-bold text-lg sm:text-xl text-black">Company Job Openings</p>
            </div>
          )}
          {activeButton === "about" && (
            <div className="flex flex-col gap-5 text-gray-500">
              <p className="font-bold text-lg sm:text-xl text-black">About Company</p>
              <p>{company.about}</p>
            </div>
          )}
          {activeButton === "perks" && (
            <div className="flex flex-col gap-5 text-gray-500">
              <p className="font-bold text-lg sm:text-xl text-black">Company Perks and Benefits</p>
              <p>
                This is a test message about the company's perks and benefits, I will come back to it at a later stage to
                edit it.
              </p>
              <div>
                <p>- This is the benefit</p>
                <p>- This is also a benefit</p>
                <p>- This is another benefit</p>
              </div>
              <p>
                These are all the listed benefits above of working for this company. However, this is just a test I will
                come back to it and make changes so that it makes sense.
              </p>
            </div>
          )}
        </div>
      </div>
      <Postjob />
    </div>
  ) : (
    <div>No company found</div>
  )}
</div>


  )
}

export default AboutCompany;
