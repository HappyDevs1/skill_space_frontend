import { useState, useEffect } from "react";
import Postjob from "./Postjob";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

function AboutCompany() {
  const image = "https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/64b96d206c0fd7f0fadd9e49_facebook-cover-image-jobboardly-webflow-ecommerce-template-p-1080.png";

  const [activeButton, setActiveButton] = useState<string>("jobs");

  const handleButtonClick = (button: string) => {
    setActiveButton(button)
  };

  return (
    <div>
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
            <div className="mt-4">
              {activeButton === "jobs" && <div>Jobs</div>}
              {activeButton === "about" && <div>About</div>}
              {activeButton === "perks" && <div>Perks</div>}
            </div>
          </div>
        </div>
        </div>
        <Postjob />
      </div>
    </div>
  )
}

export default AboutCompany;
