import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import CircularIndeterminate from "./CircularIndeterminate";

interface Blog {
  _id: string;
  name: string;
  about: string;
  profilePicture: string;
  category: string;
  title: string;
  subheading: string;
  content: string;
  postedDate: string;
  createdAt: string;
  updatedAt: string;
}

function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleFetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:4000/blog/get/blogs");

      if (response && response.data.blogs) {
        setBlogs(response.data.blogs);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleFetchBlogs();
    console.log("Blogs are: ", blogs);
  }, []);
  return (
    <div>
      {loading ? (
        <CircularIndeterminate />
      ) : (
        <div className="mx-4 md:mx-36 my-24">
          <div className="flex flex-col gap-4 mb-16">
            <motion.p
              className="font-bold text-4xl mb-3"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1, transition: { duration: 0.4 } }}
            >
              Articles & News
            </motion.p>
            <div className="flex flex-col md:flex-row gap-8 md:gap-8">
              <motion.p
                className="text-gray-500"
                initial={{ scale: 0.7 }}
                animate={{ scale: 1, transition: { duration: 0.5 } }}
              >
                This section features updates and insights, <br />
                tailored to keep you informed and inspired.
              </motion.p>
              <motion.div
                className="flex gap-5 items-center"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1, transition: { duration: 0.6 } }}
              >
                <input
                  className="border border-2 rounded h-9 w-full md:w-40 pl-4"
                  placeholder="Search for articles..."
                />
                <button className="bg-blue-600 text-white rounded px-4 py-2 font-bold">
                  Search
                </button>
              </motion.div>
            </div>
          </div>

          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {blogs.length > 0 ? (
                <div>
                  {blogs.map((blog) => (
                    <motion.div
                      key={blog._id}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1, transition: { duration: 0.4 } }}
                    >
                      <div className="bg-white rounded-lg shadow-lg">
                        <img
                          src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649cf7ce647e2a80f773e00f_8-innovative-design-ideas-featured-image-jobboardly-x-webflow-template-p-800.png"
                          className="rounded-t-lg"
                        />
                        <div className="p-6">
                          <div className="flex items-center text-xs my-7 font-bold">
                            <p className="text-blue-500 uppercase">
                              {blog.category}
                            </p>
                            <p className="text-gray-500 mx-3">-</p>
                            <p className="text-gray-500 uppercase">
                              {new Date(blog.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                          <h2 className="text-xl font-bold mb-2">
                            {blog.title}
                          </h2>
                          <p className="text-gray-700">{blog.subheading}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div>Blogs are empty</div>
              )}
            </div>
          </div>

          <motion.div
            className="container mx-auto p-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1, transition: { duration: 0.4 } }}
          >
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="flex flex-col items-center bg-blue-600 rounded-lg shadow-lg my-20 py-14">
                <h1 className="text-white font-bold text-4xl mb-4">
                  Subscribe to our newsletter
                </h1>
                <p className="text-white text-center">
                  Subscribe to our newsletter for updates.
                  <br />
                  Stay tuned for more exciting news and tips. <br />
                  Sign up now to never miss a moment, sharp.
                </p>
                <div className="flex gap-5 mt-7 justify-center">
                  <input
                    className="w-full sm:w-80 h-9 px-5 rounded"
                    placeholder="Enter your email address..."
                  />
                  <button className="bg-white text-black px-4 rounded">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col">
            <motion.p
              className="font-bold text-4xl"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1, transition: { duration: 0.8 } }}
            >
              Latest posts
            </motion.p>
            <motion.div
              className="flex justify-end gap-4"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1, transition: { duration: 0.8 } }}
            >
              <button className="bg-blue-600 text-white text-xs rounded px-3 py-1">
                All
              </button>
              <button className="border border-2 rounded px-3 py-1 text-xs">
                Marketing
              </button>
              <button className="border border-2 rounded px-3 py-1 text-xs">
                Design
              </button>
              <button className="border border-2 rounded px-3 py-1 text-xs">
                Development
              </button>
            </motion.div>

            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {blogs.length > 0 ? (
                  <div>
                    {blogs.map((blog) => (
                      <motion.div
                        key={blog._id}
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1, transition: { duration: 0.9 } }}
                      >
                        <div className="bg-white rounded-lg shadow-lg">
                          <img
                            src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649cf7ce647e2a80f773e00f_8-innovative-design-ideas-featured-image-jobboardly-x-webflow-template-p-800.png"
                            className="rounded-t-lg"
                          />
                          <div className="p-6">
                            <div className="flex items-center text-xs my-7 font-bold">
                              <p className="text-blue-500 uppercase">
                                {blog.category}
                              </p>
                              <p className="text-gray-500 mx-3">-</p>
                              <p className="text-gray-500 uppercase">
                                {new Date(blog.createdAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                            <h2 className="text-xl font-bold mb-2">
                              {blog.title}
                            </h2>
                            <p className="text-gray-700">{blog.subheading}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div>Blogs are empty</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
