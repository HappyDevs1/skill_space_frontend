import { MdHeadsetMic } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { PiBuildings } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { TiSocialYoutube, TiSocialLinkedin, TiSocialTwitter, TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center mx-72 my-24">
        <p className="font-bold text-4xl mb-5">Get in touch today</p>
        <p className="text-gray-500">This is a test message, I will come back to it later on. <br/> This is a test message right, I will adjust it later. Great !</p>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
            <div className="flex gap-6 items-center border-2 rounded-xl px-5 py-3">
              <div className="border-2 px-1 py-1 rounded-lg">
              <MdHeadsetMic className="text-2xl text-blue-500" />
              </div>
              <div className="flex flex-col gap-0.5 font-bold text-sm">
                <p className="font-bold text-gray-400">SUPPORT</p>
                <p>support@skillspace</p>
              </div>
            </div>

            <div className="flex gap-6 items-center border-2 rounded-xl px-5 py-3">
              <div className="border-2 px-1 py-1 rounded-lg">
              <FaRegStar className="text-2xl text-blue-500 " />
              </div>
              <div className="flex flex-col gap-0.5 font-bold text-sm">
                <p className="font-bold text-gray-400">FEATURED JOBS</p>
                <p>featured@skillspace</p>
              </div>
            </div>

            <div className="flex gap-6 items-center border-2 rounded-xl px-5 py-3">
              <div className="border-2 px-1 py-1 rounded-lg">
              <PiBuildings className="text-2xl text-blue-500" />
              </div>
              <div className="flex flex-col gap-0.5 font-bold text-sm">
                <p className="font-bold text-gray-400">PARTNERSHIPS</p>
                <p>partners@skillspace</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-0">
            <div className="flex items-center rounded-md border-2 my-20">
              <div className="flex flex-col gap-7 bg-white w-full px-5 py-5">
                <div className="flex gap-5">
                <div className="flex flex-col">
                  <label className="mb-2">Name</label>
                  <input className="border-2 rounded px-2" placeholder="What's your name?"/>
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Email</label>
                  <input className="border-2 rounded px-2" placeholder="What's your email?"/>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex flex-col">
                  <label className="mb-2">Phone</label>
                  <input className="border-2 rounded px-2" placeholder="What's your phone?"/>
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Subject</label>
                  <input className="border-2 rounded px-2" placeholder="Select subject" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mb-2">Leave us a message</label>
                <textarea placeholder="Please write your message" className="border-2 w-full h-24 px-2"></textarea>
              </div>
              <button className="self-start bg-blue-500 text-white px-3 py-2 rounded text-sm font-bold">Submit Message</button>
              
              </div>
              <div className="bg-gray-100 w-full px-5 py-28">
                <p className="font-bold text-2xl mb-2">Contact details</p>
                <p className="text-gray-600">This is a test message, I will come back to this text to change it. I will change it later.</p>
                <div className="flex flex-row items-center gap-3 mt-3">
                <CiMail className="text-xl"/>
                <p className="font-bold">contact@skillspace.com</p>
                </div>
                <div className="flex flex-row items-center gap-3 mt-5">
                <BsTelephone className="text-md"/>
                  <p className="font-bold">(012) 453 - 7583</p>
                </div>
                <p className="font-bold mt-5">Follow us</p>
                <div className="flex gap-3 items-center mt-4">
                  <TiSocialFacebook className="text-2xl"/>
                  <TiSocialTwitter className="text-2xl"/>
                  <AiFillInstagram className="text-xl"/>
                  <TiSocialLinkedin className="text-2xl"/>
                  <TiSocialYoutube className="text-2xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;