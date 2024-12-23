function ViewBlog() {
  return (
    <div className="flex justify-center my-20">
      <div className="flex flex-col justify-center items-center gap-10 mt-20 items-center w-[70%]">
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <div className="flex gap-3 font-bold">
            <p className="text-blue-500">DESIGN</p>
            <span>-</span>
            <p className="text-gray-500">JUNE 28, 2023</p>
          </div>
          <p className="font-bold text-4xl">
            8 innovative design ideal to <br /> make your resume pop
          </p>
          <p className="text-gray-500">
          Read our latest articles and updates. <br /> Stay updated with our latest posts and valuable information.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <img
            className="w- rounded-2xl"
            src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649cf7ce647e2a80f773e00f_8-innovative-design-ideas-featured-image-jobboardly-x-webflow-template-p-1080.png"
          />
        </div>
        <div className="flex justify-center items-center gap-[5%]">
          <div className="flex flex-col justify-center items-center basis-[30%] w-full border-2 rounded-lg p-[1%] bg-purple-50">
            <div>
              <img
                className="w-20 rounded-full"
                src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/649c614b0a709093e7f3c32c_john-carter-portrait-jobboardly-x-webflow-template.jpg"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4 text-center w-full">
              <p className="font-bold">John Carter</p>
              <p className="text-gray-500 text-sm">
                This is a test message about John Carter. I will come back later
                to edit it, but for now, I will leave it as a test message.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full basis-[70%]">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-2xl">Include a personal profile or introduction statement at the top of your resume</p>
              <p className="text-gray-500">This is a test message I will come back to it later on to edit it later on. For now I will just leave it like this as a test message then come back later on to edit the text so that it can make much more sense and have a meaning. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBlog;
