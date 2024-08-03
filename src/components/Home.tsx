import { FaSearch, FaCloud, FaCentercode } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Select from "react-select";
import { VscGraph } from "react-icons/vsc";
import { IoBriefcaseOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { DiCompass } from "react-icons/di";

function Home() {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      minHeight: '2.5rem',
      height: '100%',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'gray',
      fontSize: '0.875rem',
    }),
  };
  return (
    <div className="flex flex-col items-center min-h-screen">
    <div className="background w-full">
  <div className="m-20 self-start">
    <p className="font-bold text-sky-500">TOP CAREER OPPORTUNITIES</p>
    <p className="text-4xl font-semibold mt-2 mb-5">
      Find your ideal job <br /> across all industries
    </p>
    <p className="text-slate-600">
      Explore a diverse array of career opportunities in <br /> multiple sectors. Whether you're seeking <br /> a position in technology, healthcare, finance, <br /> or any other industry, we have the perfect role <br /> to match your skills and aspirations.
    </p>
    <div className="flex items-center mt-4 text-slate-500 font-bold">
    <DiCompass className="mr-2" />
    <p>agency</p>
    <FaCloud className="mx-2"/>
    <p>application</p>
    <GrTechnology className="mx-2"/>
    <p>business</p>
    <FaCentercode className="mx-2" />
    <p>company</p>
    </div>
  </div>
  <div className="flex flex-col items-center justify-center w-full flex-grow">
    <div className="flex items-center border border-gray-400 rounded p-4 w-max">
      <div className="flex items-center rounded border border-gray-300">
        <div className="flex items-center p-2">
          <FaSearch className="text-grey-500" />
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
      <div className="flex items-center rounded ml-4 border border-gray-300">
        <div className="flex items-center px-2">
          <CiLocationOn className="text-gray-500" />
        </div>
        <div className="w-48">
          <Select
            options={options}
            placeholder="Location"
            classNamePrefix="react-select"
            styles={customStyles}
          />
        </div>
      </div>
      <div className="flex items-center rounded ml-4 border border-gray-300">
        <div className="flex items-center px-2">
          <VscGraph className="text-gray-500" />
        </div>
        <div className="w-48">
          <Select
            options={options}
            placeholder="Job level"
            classNamePrefix="react-select"
            styles={customStyles}
          />
        </div>
      </div>
      <div className="flex items-center rounded ml-400 border border-gray-300">
        <div className="flex items-center px-2">
          <IoBriefcaseOutline className="text-gray-500" />
        </div>
        <div className="w-48">
          <Select
            options={options}
            placeholder="Department"
            classNamePrefix="react-select"
            styles={customStyles}
          />
        </div>
      </div>
    </div>
  </div>
  {/* <div>
    <p>Feautured jobs</p>
    <div>
will add featured jobs here
    </div>
  </div> */}
  </div>
</div>
  )
}

export default Home;