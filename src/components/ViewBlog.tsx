import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularIndeterminate from "./CircularIndeterminate";
import { motion } from "framer-motion";

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

function ViewBlog() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  const handleFetchBlog = async () => {
    try {
      const response = await axios.get(`https://skill-space-backend.onrender.com/blog/get/${id}`)

      if (response && response.data.blog) {
        setBlog(response.data.blog)
      } else {
        setBlog(null);
      }

      console.log("Viewed blog: ", response.data.blog);

    } catch (error) {
      console.error("Failed to fetch blog", error);
  } finally {
    setLoading(false);
  }
  }

  useEffect(() => {
    if (id) {
      handleFetchBlog();
      console.log("Updated blog: ", blog)
    }
  }, [id])
  return (
    <div>
      {
        loading ? (
          <CircularIndeterminate />
        ) : (
          <>
          {
            blog ? (
              <div className="flex justify-center my-20" key={blog._id}>
              <div className="flex flex-col justify-center items-center gap-10 mt-20 items-center w-[70%]">
                <div className="flex flex-col justify-center items-center gap-5 w-full">
                  <motion.div className="flex gap-3 font-bold" initial={{ scale: 0.7 }} animate={{ scale: 1, transition: { duration: 0.4 } }}>
                    <p className="text-blue-500 uppercase">{blog.category}</p>
                    <span>-</span>
                    <p className="text-gray-500 uppercase">{new Date(blog.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}</p>
                  </motion.div>
                  <motion.p className="font-bold text-4xl" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.5 } }}>
                    {blog.title}
                  </motion.p>
                  <motion.p className="text-gray-500" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.6 } }}>
                  Read our latest articles and updates. <br /> Stay updated with our latest posts and valuable information.
                  </motion.p>
                </div>
                <motion.div className="flex justify-center items-center w-full" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.7 } }}>
                  <motion.img
                    className="w- rounded-2xl"
                    src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af1144/649cf7ce647e2a80f773e00f_8-innovative-design-ideas-featured-image-jobboardly-x-webflow-template-p-1080.png"
                    initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.7 } }}
                  />
                </motion.div>
                <div className="flex justify-center items-center gap-[5%]">
                  <motion.div className="flex flex-col justify-center items-center basis-[30%] w-full border-2 rounded-lg p-[1%] bg-purple-50" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.8 } }}>
                    <div>
                      <img
                        className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover"
                        src={blog.profilePicture}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-4 text-center w-full">
                      <p className="font-bold">{blog.name}</p>
                      <p className="text-gray-500 text-sm">
                        {
                          blog.about
                        }
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className="flex flex-col w-full basis-[70%]" initial={{ scale: 0.5 }} animate={{ scale: 1, transition: { duration: 0.8 } }}>
                    <div className="flex flex-col gap-4">
                      <p className="font-bold text-2xl">{blog.subheading}</p>
                      <p className="text-gray-500">{blog.content}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            ) : (
              <div>Blog not found</div>
            )
          }
          </>
        )
      }
    </div>
  );
}

export default ViewBlog;
