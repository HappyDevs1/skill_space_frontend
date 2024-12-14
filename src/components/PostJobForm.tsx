import { useState } from "react";
import Select from "react-select";

function PostJobForm() {
  const [activeTab, setActiveTab] = useState<"button1" | "button2">("button1");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [department, setDepartment] = useState<string>("");

  const handleTabClick = (tab: "button1" | "button2") => {
    setActiveTab(tab);
  };

  const locationDropdown = [
    { value: "Gauteng", label: "Gauteng" },
    { value: "Eastern-Cape", label: "Eastern-Cape" },
    { value: "Mpumalanga", label: "Mpumalanga" },
    { value: "Free-State", label: "Free-State" },
    { value: "Limpopo", label: "Limpopo" },
    { value: "North-West", label: "North-West" },
    { value: "Nothern-Cape", label: "Nothern-Cape" },
    { value: "KwaZulu-Natal", label: "KwaZulu-Natal" },
    { value: "Western-Cape", label: "Western-Cape" },
  ];

  const levelDropdown = [
    { value: "Internship", label: "Internship" },
    { value: "Junior", label: "Junior" },
    { value: "Mid-level", label: "Mid-level" },
    { value: "Senior", label: "Senior" },
  ];

  const departmentDropdown = [
    { value: "Finance", label: "Finance" },
    { value: "Technology", label: "Technology" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Real-estate", label: "Real-estate" },
    { value: "Construction", label: "Construction" },
  ];

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      minHeight: "2.5rem",
      height: "100%",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "gray",
      fontSize: "0.875rem",
    }),
  };

  return (
    <div className="flex flex-col items-center my-10 gap-5">
      <p className="font-bold text-4xl">Post a job today</p>
      <p className="text-gray-500 text-center">
        This is a test message I will come back later to edit it so that it makes sense <br />
        This is a test message I will come back to it later so that make it make sense
      </p>

      <div className="w-full flex flex-col items-center">
        <div className="flex border-b-2 border-gray-200 gap-5 px-5 sm:px-32">
          <button
            onClick={() => handleTabClick("button1")}
            className={`px-10 py-2 text-md transition-all duration-200 ${
              activeTab === "button1" ? "border-b border-blue-500 text-black" : "border-none text-gray-500"
            }`}
          >
            Free job
          </button>
          <button
            onClick={() => handleTabClick("button2")}
            className={`px-10 py-2 text-md transition-all duration-200 ${
              activeTab === "button2" ? "border-b border-blue-500 text-black" : "border-none text-gray-500"
            }`}
          >
            Paid job
          </button>
        </div>

        <div className="mt-4 w-full">
          {activeTab === "button1" ? (
            <div className="flex flex-col gap-3 border-2 rounded-lg px-5 sm:px-10 py-8">
              <p className="font-bold text-lg">Job information</p>
              <div className="flex flex-col gap-3">
                <label>Job title</label>
                <input className="border-2 px-3 rounded w-full" placeholder="Enter job title" />
              </div>
              <div className="flex flex-col gap-3">
                <label>Job description</label>
                <textarea className="border-2 rounded px-3 w-full" placeholder="Enter a job description" />
              </div>
              <div className="flex flex-wrap gap-5 justify-between">
                <div className="flex flex-col gap-3 w-full sm:w-1/2">
                  <label>Job salary</label>
                  <input className="border-2 rounded px-3 py-1 w-full" placeholder="Annual Salary in ZAR" />
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-1/2">
                  <label>Job location</label>
                  <Select
                    options={locationDropdown}
                    value={locationDropdown.find((option) => option.value === location)}
                    placeholder="Location"
                    classNamePrefix="react-select"
                    styles={customStyles}
                    onChange={(selectedOption) => setLocation(selectedOption?.value || "")}
                    className="w-full sm:w-52 border-2 py-0"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-5 justify-between">
                <div className="flex flex-col gap-3 w-full sm:w-1/2">
                  <label>Job level</label>
                  <input className="border-2 rounded px-3 w-full" placeholder="Senior" />
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-1/2">
                  <label>Department</label>
                  <input className="border-2 rounded px-3 w-full" placeholder="Technology" />
                </div>
              </div>

              <button className="bg-blue-500 text-white font-bold rounded py-2 my-3 w-full sm:w-auto">
                Submit
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 border-2 rounded-lg px-5 sm:px-10 py-8">
              <p className="font-bold text-lg">Job information</p>
              <div className="flex flex-col gap-3">
                <label>Job title</label>
                <input className="border-2 px-3 rounded w-full" placeholder="Enter job title" />
              </div>
              <div className="flex flex-col gap-3">
                <label>Job description</label>
                <textarea className="border-2 rounded px-3 w-full" placeholder="Enter a job description" />
              </div>
              <div className="flex flex-wrap gap-5 justify-between">
                <div className="flex flex-col gap-3 w-full sm:w-1/2">
                  <label>Job salary</label>
                  <input className="border-2 rounded px-3 w-full" placeholder="Annual Salary in ZAR" />
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-1/2">
                  <label>Job location</label>
                  <input className="border-2 rounded px-3 w-full" placeholder="Gauteng" />
                </div>
              </div>

              <div className="flex flex-wrap gap-5 justify-between">
                <div className="flex flex-col gap-3 w-full sm:w-1/2">
                  <label>Job level</label>
                  <input className="border-2 rounded px-3 w-full" placeholder="Senior" />
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-1/2">
                  <label>Department</label>
                  <input className="border-2 rounded px-3 w-full" placeholder="Technology" />
                </div>
              </div>

              <button className="bg-blue-500 text-white font-bold rounded py-2 my-3 w-full sm:w-auto">
                Submit
              </button>

              <div className="flex flex-col gap-4 mt-5">
                <p className="font-bold">Featured job</p>
                <div className="flex flex-col items-center bg-gray-100 px-5 py-5 rounded-lg border-2 w-full">
                  <p className="text-gray-500 text-center">
                    If you would like to make this job featured, click the button below to proceed.
                  </p>
                  <button className="bg-yellow-500 text-white rounded py-2 px-4 w-full sm:w-auto mt-3">
                    Make this job featured
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostJobForm;

