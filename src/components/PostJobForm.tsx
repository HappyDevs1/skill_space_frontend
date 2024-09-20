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
              <p>Content for Button 1</p>
            ) : (
              <p>Content for Button 2</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJobForm;
