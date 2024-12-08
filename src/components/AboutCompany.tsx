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
      {
        loading ? (
          <CircularIndeterminate />
        ) : (
          <div className="flex flex-col">
          <div className="flex flex-col justify-center mx-[19%] my-[5%] py-[%] border-2 rounded-xl">
            <div>
              <img src={image} className="rounded-t-xl"/>
            </div>
            <div className="mx-[10%] mt-[-4%]">
            <div className="flex justify-center items-center bg-gray-500 w-[10%] h-20 rounded-xl">
              <div>P.P</div>
            </div>
            <div className="flex justify-between items-center">
            <p className="font-bold text-3xl my-[3%] mx">Company</p>
            <div>
              <button className="bg-gray-100 px-3 py-1 rounded font-bold border border-gray-200 text-sm">Visit website</button>
            </div>
            </div>
            <p className="text-gray-600">This is a test message I will come back later on to edit it so that it makes sense. <br /> I will come back at a later stage to edit it so it make sense.</p>
            <div>
              <div className="flex gap-5 mt-5">
                <div className="flex items-center gap-1">
                  <CiLocationOn />
                  <p>Gauteng</p>
                </div>
                <div className="flex items-center gap-1">
                  <GoPerson />
                  <p>100 - 1,000</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-8 my-7 border-b-2 border-gray-300">
                <button
                onClick={() => {handleButtonClick("jobs")}}
                className={`px-4 py-2 ${activeButton === "jobs" ? "border-b-2 border-blue-500" : "text-gray-500"}`}>Company jobs</button>
                <button
                onClick={() => {handleButtonClick("about")}}
                className={`px-4 py-2 ${activeButton === "about" ? "border-b-2 border-blue-500" : "text-gray-500"}`}
                  >About the company</button>
                <button
                onClick={() => {handleButtonClick("perks")}}
                className={`px-4 py-2 ${activeButton === "perks" ? "border-b-2 border-blue-500" : "text-gray-500"}`}>Company perks & benefits</button>
              </div>
              <div className="mt-5 mb-16">
                {
                activeButton === "jobs" &&
                <div className="flex flex-col gap-5 text-gray-500">
                  <p className="font-bold text-xl text-black">Company job openings</p>
                </div>
                }
                {
                activeButton === "about" &&
                <div className="flex flex-col gap-5 text-gray-500">
                  <p className="font-bold text-xl text-black">About company</p>
                  <p>This is a test message about the company's information, I will come back to it at a later stage to edit it. I will come back at a later stage so that I will make this text to make sense. But for now I will just leave this text as it is.
                  </p>
                  <div>
                  <p>- This is information about the company</p>
                  <p>- This is also information about the company</p>
                  <p>- This is another information about the company</p>
                  </div>
                  <p>These are all the listed points about the company above , However this is just a test I will come back to it and make changes so that it makes sense. But for now I will jsut leave it as a test text just for the interface.</p>
                </div>
                }
                {
                activeButton === "perks" && 
                <div className="flex flex-col gap-5 text-gray-500">
                  <p className="font-bold text-xl text-black">Company perks and benefits</p>
                  <p>This is a test message about the company's perks and benefits, I will come back to it at a later stage to edit it. I will come back at a later stage so that I will make this text to make sense. But for now I will just leave this text as it is.
                  </p>
                  <div>
                  <p>- This is the benefit</p>
                  <p>- This is also a benefit</p>
                  <p>- This is another benefit</p>
                  </div>
                  <p>These are all the listed benefits above of working for this company, However this is just a test I will come back to it and make changes so that it makes sense. But for now I will jsut leave it as a test text just for the interface.</p>
                </div>
                }
              </div>
            </div>
          </div>
          </div>
          <Postjob />
        </div>
        )
      }
    </div>
  )
}

export default AboutCompany;
