import { useLocation } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { IoBriefcaseOutline } from "react-icons/io5";

function SearchedJobsPage() {
  const location = useLocation();
  const { filteredJobs } = location.state || {};

  return (
    <div className="mx-36 my-8">
      <div className="flex flex-col gap-12">
        <div className="flex gap-1 items-center">
          <IoIosArrowRoundBack className="h-7 w-7 text-gray-500" />
          <p className="text">Back to all jobs</p>
        </div>
        <div className="flex gap-64 items-center">
          <div className="flex flex-col">
            <p className="font-bold text-gray-400">SORT BY</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl text-gray-700">Found Results</p>
            <p className="text-gray-500 mb-3">
              These are all the jobs we have managed to discover for you based on your search.
            </p>

            {/* Grid container for the jobs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs && filteredJobs.length > 0 ? (
                filteredJobs.map((job: any) => (
                  <div
                    key={job._id}
                    className="flex gap-7 justify-center py-4 w-full max-w-xs rounded-lg border-2"
                  >
                    <div className="px-7 py-3">
                      <div className="flex justify-between">
                        <img
                          src={job.freelancer.profilePicture}
                          className="w-20 rounded-xl"
                          alt={job.freelancer.name}
                        />
                        <IoIosArrowRoundForward className="h-10 w-7 text-gray-500" />
                      </div>
                      <div className="flex flex-col gap-1 mt-4">
                        <p className="text-gray-500 font-bold">{job.freelancer.name}</p>
                        <p className="font-bold">{job.title}</p>
                        <p className="text-gray-500">{job.description}</p>
                      </div>
                      <div className="flex gap-2.5 mt-4">
                        <div className="flex items-center border border-gray-300 rounded p-1">
                          <CiLocationOn className="text-blue-500 mr-1.5 h-3 w-3" />
                          <p className="text-xs font-medium">{job.location}</p>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded p-1">
                          <VscGraph className="text-blue-500 mr-1.5 h-3 w-3" />
                          <p className="text-xs font-medium">{job.level}</p>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded p-1">
                          <IoBriefcaseOutline className="text-blue-500 mr-1.5 h-3 w-3" />
                          <p className="text-xs font-medium">{job.department}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No data available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchedJobsPage;
