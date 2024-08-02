import { FaSearch } from "react-icons/fa";

function Home() {
  return (
    <div className="background flex">
      <div className="m-20">
        <p className="font-bold text-sky-500">TOP CAREER OPPORTUNITIES</p>
        <p className="text-4xl font-semibold mt-2 mb-5">Find your ideal job 
          <br /> accross all industries</p>
        <p className="text-slate-600">Explore a diverse array of career opportunities in 
          <br /> multiple sectors. Whether you're seeking <br /> a position in technology, healthcare, finance, <br /> or any other industry, we have the perfect role <br /> to match your skills and aspirations.</p>
      </div>
      <div className="flex items-center border border-gray-300 rounded mt-20 mt-auto">
      <div className="flex items-center px-2">
        <FaSearch className="text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search for jobs"
        className="flex-grow py-2 px-2 focus:outline-none"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
        Search
      </button>
    </div>
    </div>
  )
}

export default Home;