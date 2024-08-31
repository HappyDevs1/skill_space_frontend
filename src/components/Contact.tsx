import { MdHeadsetMic } from "react-icons/md";

function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center mx-72 my-24">
        <p className="font-bold text-4xl mb-5">Get in touch today</p>
        <p className="text-gray-500">This is a test message, I will come back to it later on. <br/> This is a test message right, I will adjust it later. Great !</p>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
            <div className="flex gap-6 items-center border-2 rounded-xl px-5 py-3">
              <div className="border-2 px-2 py-2 rounded-lg">
              <MdHeadsetMic className="text-2xl text-blue-500" />
              </div>
              <div className="flex flex-col gap-0.5 font-bold text-sm">
                <p className="font-bold text-gray-400">SUPPORT</p>
                <p>support@skillspace</p>
              </div>
            </div>

            <div className="flex gap-6 px-6 py-5 w-full max-w-xs border-2 border-opacity-5 rounded-lg">
              <div className="border-2 px-2 py-2 rounded-lg">
              <MdHeadsetMic className="text-2xl text-blue-500" />
              </div>
              <div className="flex flex-col gap-0.5 font-bold text-sm">
                <p className="font-bold text-gray-400">FEATURED JOBS</p>
                <p>featured@skillspace</p>
              </div>
            </div>

            <div className="flex gap-6 items-center border-2 rounded-xl px-5 py-3">
              <div className="border-2 px-2 py-2 rounded-lg">
              <MdHeadsetMic className="text-2xl text-blue-500" />
              </div>
              <div className="flex flex-col gap-0.5 font-bold text-sm">
                <p className="font-bold text-gray-400">PARTNERSHIPS</p>
                <p>partners@skillspace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;