function Blog() {
  return (
    <div>
      <div className="mx-36 my-24">
        <div className="flex flex-col gap mb-16">
        <p className="font-bold text-4xl mb-3">Articles & News</p>
        <div className="flex gap-80">
          <p className="text-gray-500">This is a test message about the articles and news, <br /> I will come back and make necessary changes</p>
          <div className="flex gap-5 items-center">
          <input className="border border-2 rounded h-9 w-80 pl-4" placeholder="Search for articles..."/>
          <button className="bg-blue-600 text-white rounded px-4 py-2 font-bold">Search</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white rounded-lg shadow-lg">
      <img src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649cf7a8738eb73adf31d215_career-ui-ux-designer-featured-image-jobboardly-x-webflow-template-p-800.png" className="rounded-t-lg" />
      <div className="p-6">
        <div className="flex items-center text-xs my-7">
          <p className="text-blue-500 font-bold">DESIGN</p>
          <p className="text-gray-500 mx-3">-</p>
          <p className="text-gray-500">JUN 28, 2024</p>
        </div>
        <h2 className="text-xl font-bold mb-2">How to start your career as a UI/UX designer</h2>
        <p className="text-gray-700">This is the content of the first card. It will expand to fill half the page on larger screens.</p>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-lg">
      <img src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649cf7ce647e2a80f773e00f_8-innovative-design-ideas-featured-image-jobboardly-x-webflow-template-p-800.png" className="rounded-t-lg" />
      <div className="p-6">
      <div className="flex items-center text-xs my-7">
          <p className="text-blue-500 font-bold">DESIGN</p>
          <p className="text-gray-500 mx-3">-</p>
          <p className="text-gray-500">JUN 28, 2024</p>
        </div>
        <h2 className="text-xl font-bold mb-2">8 innovative design ideas to make your resume pop</h2>
        <p className="text-gray-700">This is the content of the second card. It will also expand to fill half the page on larger screens.</p>
      </div>
    </div>
  </div>
</div>


    </div>
    </div>
  )
}

export default Blog;