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
        <div className="flex items-center text-xs my-7 font-bold">
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
      <div className="flex items-center text-xs my-7 font-bold">
          <p className="text-blue-500">DESIGN</p>
          <p className="text-gray-500 mx-3">-</p>
          <p className="text-gray-500">JUN 28, 2024</p>
        </div>
        <h2 className="text-xl font-bold mb-2">8 innovative design ideas to make your resume pop</h2>
        <p className="text-gray-700">This is the content of the second card. It will also expand to fill half the page on larger screens.</p>
      </div>
    </div>
  </div>
</div>

<div className="container mx-auto p-4">
  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
    <div className="flex flex-col items-center bg-blue-600 rounded-lg shadow-lg my-20 py-14">
      <h1 className="text-white font-bold text-4xl mb-4">Subscribe to our newsletter</h1>
      <p className="text-white">This is a test message for the newsletter. I will come back to it to finalise this <br /> text. This is just a test message. I will come back to it to edit it later on, sharp.</p>
      <div className="flex gap-5 mt-7">
        <input className="w-80 h-9 px-5 rounded" placeholder="Enter your email address..." />
        <button className="bg-white text-black px-4 rounded">Subscribe</button>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col">
  <p className="font-bold text-4xl">Latest posts</p>
  <div className="flex justify-end gap-4">
    <button className="bg-blue-600 text-white text-xs rounded px-3 py-1">All</button>
    <button className="border border-2 rounded px-3 py-1 text-xs">Marketing</button>
    <button className="border border-2 rounded px-3 py-1 text-xs">Design</button>
    <button className="border border-2 rounded px-3 py-1 text-xs">Development</button>
  </div>
<div className="container mx-auto p-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
    <div className="flex flex-col items-center shadow-lg rounded-xl">
      <img src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649cf761ba75cbd927cb4823_technical-interview-thumbnail-image-jobboardly-x-webflow-template.png" className="rounded-t-xl" />
      <div className="p-6">
      <div className="flex items-center text-xs my-7 font-bold">
          <p className="text-blue-500">DEVELOPMENT</p>
          <p className="text-gray-500 mx-3">-</p>
          <p className="text-gray-500">JUN 28, 2024</p>
        </div>
        <h2 className="text-xl font-bold mb-2">8 innovative design ideas to make your resume pop</h2>
      </div>
    </div>

    <div className="flex flex-col items-center shadow-lg rounded-xl">
      <img src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649cf7892b81d5ad8223aa61_digital-marketing-trends-thumbnail-image-jobboardly-x-webflow-template.png" className="rounded-t-xl" />
      <div className="p-6">
      <div className="flex items-center text-xs my-7 font-bold">
          <p className="text-blue-500">MARKETING</p>
          <p className="text-gray-500 mx-3">-</p>
          <p className="text-gray-500">JUN 28, 2024</p>
        </div>
        <h2 className="text-xl font-bold mb-2">8 innovative design ideas to make your resume pop</h2>
      </div>
    </div>

    <div className="flex flex-col items-center shadow-lg rounded-xl">
      <img src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649cf7ac1c92b85a2e4387ed_career-ui-ux-designer-thumbnail-image-jobboardly-x-webflow-template.png" className="rounded-t-xl" />
      <div className="p-6">
      <div className="flex items-center text-xs my-7 font-bold">
          <p className="text-blue-500">DESIGN</p>
          <p className="text-gray-500 mx-3">-</p>
          <p className="text-gray-500">JUN 28, 2024</p>
        </div>
        <h2 className="text-xl font-bold mb-2">8 innovative design ideas to make your resume pop</h2>
      </div>
    </div>

    <div className="flex flex-col items-center shadow-lg rounded-xl">
      <img src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649cf7e4ea437f1f11997f45_8-innovative-design-ideas-thumbnail-image-jobboardly-x-webflow-template.png" className="rounded-t-xl" />
      <div className="p-6">
      <div className="flex items-center text-xs my-7 font-bold">
          <p className="text-blue-500">DESIGN</p>
          <p className="text-gray-500 mx-3">-</p>
          <p className="text-gray-500">JUN 28, 2024</p>
        </div>
        <h2 className="text-xl font-bold mb-2">8 innovative design ideas to make your resume pop</h2>
      </div>
    </div>

    <div className="flex flex-col items-center shadow-lg rounded-xl">
      <img src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649cf8048fa7ad5b02bb0360_top-5-fastest-growing-marketing-thumbnail-image-jobboardly-x-webflow-template.png" className="rounded-t-xl" />
      <div className="p-6">
      <div className="flex items-center text-xs my-7 font-bold">
          <p className="text-blue-500">MARKETING</p>
          <p className="text-gray-500 mx-3">-</p>
          <p className="text-gray-500">JUN 28, 2024</p>
        </div>
        <h2 className="text-xl font-bold mb-2">8 innovative design ideas to make your resume pop</h2>
      </div>
    </div>

    <div className="flex flex-col items-center shadow-lg rounded-xl">
      <img src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649c36c8e477d081c9699dee_easily-collaborate-thumbnail-image-jobboardly-x-webflow-template.png" className="rounded-t-xl" />
      <div className="p-6">
      <div className="flex items-center text-xs my-7 font-bold">
          <p className="text-blue-500">DEVELOPMENT</p>
          <p className="text-gray-500 mx-3">-</p>
          <p className="text-gray-500">JUN 28, 2024</p>
        </div>
        <h2 className="text-xl font-bold mb-2">8 innovative design ideas to make your resume pop</h2>
      </div>
    </div>

    </div>
  </div>
  <div className="flex justify-center mt-7">
      <button className="bg-blue-600 font-bold text-white px-3 py-1 rounded">Next</button>
    </div>
</div>
    </div>
    </div>
  )
}

export default Blog;