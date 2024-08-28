function Postjob () {
  return (
    <div>
      <div className="flex mt-24 justify-evenly mb-20">
        <div className="bg-blue-600 px-16 py-10 rounded">
          <p className="text-white text-2xl mb-3 font-bold">Post a featured job</p>
          <p className="text-white mb-8">You can post a featured job, I will come back <br /> and edit this text to ensure that it makes sense.</p>
          <button className="bg-white rounded px-2 py-1">Post a featured job</button>
        </div>
        <div className="bg-gray-100 px-16 py-10 rounded">
          <p className="text-2xl font-bold mb-3">Post a free job</p>
          <p className="text-gray-600 mb-8">You can post a free job, I will come back <br /> and edit this text to ensure that it makes sense.</p>
          <button className="bg-blue-500 text-white rounded px-2 py-1">Post a free job</button>
        </div>
      </div>
    </div>
  )
};

export default Postjob;