import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById } from '../services/userService';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  profilePicture: string;
};

function Profile() {
  const { id } = useParams<{ id: string}>();
  // const { id } = useParams(id)
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserById(id);
        setUser(data);
        console.log("Logged in user: ", data);
      } catch (error) {
        console.error("Failed to fetch user data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [id]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save logic here, e.g., make API call to save the updated details
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!id) {
  //   return <div>User ID is missing. Please log in again.</div>;
  // }

  return (
    <div>
      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
            <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
              Public Profile
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
              Account Settings
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
              Notifications
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
              PRO Account
            </a>
          </div>
        </aside>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
              <form onSubmit={handleSave}>
                <div className="grid max-w-2xl mx-auto mt-8">
                  <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                    <img
                      className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300"
                      src={user?.profilePicture}
                      alt="User avatar"
                    />
                    <div className="flex flex-col space-y-5 sm:ml-8">
                      <button
                        type="button"
                        className="py-3.5 px-7 text-base font-medium text-indigo-100 bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900"
                      >
                        Change picture
                      </button>
                      <button
                        type="button"
                        className="py-3.5 px-7 text-base font-medium text-indigo-900 bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142]"
                      >
                        Delete picture
                      </button>
                    </div>
                  </div>

                  {/* Rest of the form */}
                  <div className="mt-8 sm:mt-14 text-[#202142]">
                    <div className="flex flex-col items-center w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <div className="w-full">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-indigo-900">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg p-2.5 w-full"
                          placeholder="Your name"
                          value={user?.name}
                          onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-indigo-900">
                          Your last name
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg p-2.5 w-full"
                          placeholder="Your email"
                          value={user?.email || ''}
                          onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-indigo-900">
                          Your Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg p-2.5 w-full"
                          placeholder="Your password"
                          value={user?.password || ''}
                          onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                      </div>

                    <div className="flex justify-end mt-3">
                      <button
                        type="submit"
                        className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg px-5 py-2.5"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;
