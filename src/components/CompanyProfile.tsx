import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCompanyById, editCompany } from "../services/companyService";
import { motion } from "framer-motion";

interface Company {
  _id: string;
  name: string;
  email: string;
  profilePicture: string;
  about: string;
}

const CompanyProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [formData, setFormData] = useState<Partial<Company>>({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        if (id) {
          const data = await getCompanyById(id);
          setCompany(data);
          setFormData(data); // Populate the form with existing data
        }
      } catch (error) {
        console.error("Failed to fetch company data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) {
      console.error("Company ID is missing");
      return;
    }

    try {
      const updatedCompany = await editCompany(id, formData);
      setCompany(updatedCompany);
      console.log("Company updated successfully", updatedCompany);
      navigate("/dashboard"); // Redirect after successful save (optional)
    } catch (error) {
      console.error("Failed to update company information", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <motion.aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block" initial={{ scale: 0.5 }}
                animate={{ scale: 1, transition: { duration: 0.4 } }}>
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
          <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
          {/* Add navigation links */}
          <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
            Public Profile
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
            Account Settings
          </a>
        </div>
      </motion.aside>

      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <motion.form onSubmit={handleSave} initial={{ scale: 0.9 }}
                animate={{ scale: 1, transition: { duration: 0.5 } }}>
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <motion.h2 className="pl-6 text-2xl font-bold sm:text-xl" initial={{ scale: 0.5 }}
                animate={{ scale: 1, transition: { duration: 0.4 } }}>Public Profile</motion.h2>
              <div className="grid max-w-2xl mx-auto mt-8">
                {/* Profile Picture Section */}
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300"
                    src={company?.profilePicture || "/default-avatar.png"}
                    alt="Profile"
                  />
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-100 bg-[#202142] rounded-lg border hover:bg-indigo-900">
                      Change Picture
                    </button>
                    <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-900 bg-white rounded-lg border hover:bg-indigo-100">
                      Delete Picture
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="mt-8 sm:mt-14 text-[#202142]">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-indigo-900">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg p-2.5 w-full"
                        placeholder="Company Name"
                        value={formData.name || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg p-2.5 w-full"
                        placeholder="Email Address"
                        value={formData.email || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="about" className="block mb-2 text-sm font-medium text-indigo-900">About</label>
                      <textarea
                        id="about"
                        name="about"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg p-2.5 w-full resize-none"
                        placeholder="About the company"
                        rows={6}
                        value={formData.about || ""}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg px-5 py-2.5">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.form>
      </main>
    </div>
  );
};

export default CompanyProfile;
