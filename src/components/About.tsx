import { useRef } from "react";
import Postjob from "./Postjob";
import { LiaLightbulb } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { AiOutlineTeam, AiOutlineSafety } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";

function About() {
  const valuesRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    valuesRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <div>
      {/* About Section */}
      <div className="flex justify-center bg-gray-100 py-16 px-4">
        <div className="flex flex-col items-center text-center">
          <p className="font-bold text-3xl md:text-4xl mb-5">About our company</p>
          <p className="text-gray-500 mb-7 text-sm md:text-base leading-relaxed">
            This is a small description about the company. I will come back to this text and edit this text so that it makes more sense. This is a test text, I will come back to it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-500 text-white rounded px-4 py-2">Post a free job</button>
            <button className="border border-gray-300 rounded px-4 py-2" onClick={handleScroll}>Learn more</button>
          </div>
        </div>
      </div>

      {/* Numbers Section */}
      <div className="flex justify-center py-16 px-4">
        <div className="flex flex-col items-center text-center">
          <p className="font-bold text-2xl md:text-3xl mb-8">Our numbers</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { count: "20,583+", label: "JOB POSTED" },
              { count: "581+", label: "VERIFIED COMPANIES" },
              { count: "3,896+", label: "SUCCESSFUL HIRES" },
              { count: "100K+", label: "MONTHLY VISITS" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 w-full max-w-xs bg-white rounded shadow-md">
                <p className="text-3xl font-bold text-blue-600">{item.count}</p>
                <p className="text-gray-500 text-sm font-bold mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="flex justify-center py-16 px-4" ref={valuesRef}>
        <div className="flex flex-col items-center text-center">
          <p className="font-bold text-2xl md:text-3xl mb-6">Our values</p>
          <p className="text-gray-500 mb-10 text-sm md:text-base leading-relaxed">
            These are the values of the company. I will come back to edit this text. This is just a temporary text to get me started but I will come back soon.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <LiaLightbulb className="text-blue-500 text-2xl" />, title: "Innovation", description: "This is a test message about one of the values of the company." },
              { icon: <FaRegStar className="text-blue-500 text-2xl" />, title: "Accountability", description: "This is a test message about one of the values of the company." },
              { icon: <SiTicktick className="text-blue-500 text-2xl" />, title: "Commitment", description: "This is a test message about one of the values of the company." },
              { icon: <AiOutlineTeam className="text-blue-500 text-2xl" />, title: "Teamwork", description: "This is a test message about one of the values of the company." },
              { icon: <IoSearch className="text-blue-500 text-2xl" />, title: "Transparency", description: "This is a test message about one of the values of the company." },
              { icon: <AiOutlineSafety className="text-blue-500 text-2xl" />, title: "Security", description: "This is a test message about one of the values of the company." },
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-start p-6 w-full max-w-xs border rounded-lg shadow-sm bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gray-100 rounded-full">{value.icon}</div>
                  <p className="font-bold text-lg flex-1">{value.title}</p>
                </div>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Postjob />
    </div>
  );
}

export default About;

