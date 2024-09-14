import { useLocation } from "react-router-dom";

function SearchedJobsPage () {
  const location = useLocation()
  const { filteredJobs } = location.state || {};
  return (
    <div>
       {filteredJobs && filteredJobs.length > 0 ? (
        filteredJobs.map((job: any) => (
          <div key={job._id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
            <h2>{job.title}</h2>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Department:</strong> {job.department}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
}

export default SearchedJobsPage;