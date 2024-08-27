function About() {
  return (
    <div>
      <div className="flex justify-center bg-gray-100 py-24">
        <div className="flex flex-col items-center">
          <p className="font-bold text-4xl mb-5">About our company</p>
          <p className="mb-7">
            This is a small description about the company. I will come back to
            this text and <br /> edit this text so that it makes more sense.
            This is a test text, I will come back to it.
          </p>
          <div className="flex gap-7">
            <button className="bg-blue-500 text-white rounded px-2 py-1">
              Post a free job
            </button>
            <button className="border border-gray-300 rounded px-2 py-0.5">
              Lean more
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-24">
        <div className="flex flex-col items-center">
          <p className="font-bold text-3xl mb-8">Our numbers</p>
          <div className="container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mx-auto justify-items-center">
              <div className="flex gap-7 p-2 w-full max-w-xs rounded">
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold">
                    20,583 <span className="text-blue-500">+</span>
                  </p>
                  <p className="text-gray-400 text-xs font-bold mt-3">
                    JOB POSTED
                  </p>
                </div>
              </div>
              <div className="flex gap-7 p-2 w-full max-w-xs rounded">
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold">
                    581 <span className="text-blue-500">+</span>
                  </p>
                  <p className="text-gray-400 text-xs font-bold mt-3">
                    VERIFIED COMPANIES
                  </p>
                </div>
              </div>
              <div className="flex gap-7 p-2 w-full max-w-xs rounded">
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold">
                    3,896 <span className="text-blue-500">+</span>
                  </p>
                  <p className="text-gray-400 text-xs font-bold mt-3">
                    SUCCESSFUL HIRES
                  </p>
                </div>
              </div>
              <div className="flex gap-7 p-2 w-full max-w-xs rounded">
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold">
                    100K <span className="text-blue-500">+</span>
                  </p>
                  <p className="text-gray-400 text-xs font-bold mt-3">
                    MONTHLY VISITS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
