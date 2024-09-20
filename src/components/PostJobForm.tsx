import { useState } from "react";

function PostJobForm() {
  const [activeTab, setActiveTab] = useState<"button1" | "button2">("button1");

  const handleTabClick = (tab: "button1" | "button2") => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex flex-col items-center my-10 gap-5">
        <p className="font-bold text-4xl">Post a job today</p>
        <p className="text-gray-500">
          This is a test message I will come back later to edit it so that it makes sense <br />
          This is a test message I will come back to it later so that make it make sense
        </p>

        <div className="w-full flex flex-col items-center">
          {/* Container for the buttons and border */}
          <div className="flex border-b-2 border-gray-200 gap-5 px-32">
            {/* Button 1 */}
            <button
              onClick={() => handleTabClick("button1")}
              className={`px-10 py-2 text-md transition-all duration-200 ${
                activeTab === "button1" ? "border-b border-blue-500 text-black" : "border-none text-gray-500"
              }`}
            >
              Free job
            </button>

            {/* Button 2 */}
            <button
              onClick={() => handleTabClick("button2")}
              className={`px-10 py-2 text-md transition-all duration-200 ${
                activeTab === "button2" ? "border-b border-blue-500 text-black" : "border-none text-gray-500"
              }`}
            >
              Paid job
            </button>
          </div>

          {/* Content section for each button */}
          <div className="mt-4">
            {activeTab === "button1" ? (
              <div className="flex flex-col gap-3 border-2 rounded-lg px-10 py-8">
                <p className="font-bold text-lg">Job information</p>
                <div className="flex flex-col gap-3">
                  <label>Job title</label>
                  <input className="border-2 px-3 rounded" placeholder="Enter job title"/>
                </div>
                <div className="flex flex-col gap-3">
                  <label>Job description</label>
                  <textarea className="border-2 rounded px-3" placeholder="Enter a job description" />
                </div>
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col gap-3">
                    <label>Job salary</label>
                    <input className="border-2 rounded px-3" placeholder="Annual Salary in ZAR" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label>Job location</label>
                    <input className="border-2 rounded px-3" placeholder="Gauteng"/>
                  </div>
                  
                  </div>
                  <div className="flex justify-between gap-10">
                  <div className="flex flex-col gap-3">
                    <label>Job level</label>
                    <input className="border-2 rounded px-3" placeholder="Senior"/>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label>Department</label>
                    <input className="border-2 rounded px-3" placeholder="Technology"/>
                  </div>
                  </div>
                  <button className="bg-blue-500 text-white font-bold rounded py-1 my-3">Submit</button>
                </div>
            ) : (
              <div className="flex flex-col gap-3 border-2 rounded-lg px-10 py-8">
                <p className="font-bold text-lg">Job information</p>
                <div className="flex flex-col gap-3">
                  <label>Job title</label>
                  <input className="border-2 px-3 rounded" placeholder="Enter job title"/>
                </div>
                <div className="flex flex-col gap-3">
                  <label>Job description</label>
                  <textarea className="border-2 rounded px-3" placeholder="Enter a job description" />
                </div>
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col gap-3">
                    <label>Job salary</label>
                    <input className="border-2 rounded px-3" placeholder="Annual Salary in ZAR" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label>Job location</label>
                    <input className="border-2 rounded px-3" placeholder="Gauteng"/>
                  </div>
                  
                  </div>
                  <div className="flex justify-between gap-10">
                  <div className="flex flex-col gap-3">
                    <label>Job level</label>
                    <input className="border-2 rounded px-3" placeholder="Senior"/>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label>Department</label>
                    <input className="border-2 rounded px-3" placeholder="Technology"/>
                  </div>
                  </div>
                  <button className="bg-blue-500 text-white font-bold rounded py-1 my-3">Submit</button>
                  <div className="flex flex-col gap-4">
                    <p className="font-bold">Featured job</p>
                    <div className="flex flex-col items-center bg-gray-100 px-5 py-5 rounded-lg border-2">
                      <p className="text-gray-500">If you already purchased a featured job credit, please insert your order ID <br /> below. If you didn't, you can go to <span className="text-blue-500">premium jobs page</span> to purchase it./</p>
                      <div className="flex flex-col w-full gap-3 items-start">
                      <label className="font-bold">Order ID</label>
                      <input className="border-2 px-3 w-full rounded" placeholder="Insert your order ID" />
                      </div>
                    </div>
                  </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJobForm;
