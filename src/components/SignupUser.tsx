import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/userService";
import CircularIndeterminate from "./CircularIndeterminate";

const freelancer = "freelancer";
const client = "client";

function SignupUser() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("about", about);

      if (profilePicture) {
        formData.append("profilePicture", profilePicture);
      }

      const result = await createUser(formData);
      console.log(result);
      setName("");
      setEmail("");
      setPassword("");
      setAbout("");
      setProfilePicture(null);
      setSuccessMessage("User created successfully!");
      setLoading(false);
      redirectToLogin()
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const redirectToLogin = () => {
    navigate("/login");
  };

  const handleCompanySignup = () => {
    try {
      navigate("/company/signup");
    } catch (error) {
      console.log("Error redirecting to company signup");
    }
  }

  return (
<div>
  {loading ? (
    <div>
      <CircularIndeterminate />
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="flex mt-24 justify-center mb-20">
        <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Container */}
          <div className="px-4 py-8 sm:px-10 sm:py-12 md:px-16 md:py-10 rounded border-2">
            <p className="text-2xl sm:text-3xl mb-3 font-bold">Create account</p>
            <div className="flex items-center gap-2">
              <p className="text-gray-500">Already have an account?</p>
              <button className="underline" onClick={redirectToLogin}>Sign in.</button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-5 mt-5">
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                  <label>Name</label>
                  <input
                    className="border-2 rounded px-3 py-1 w-full"
                    placeholder="John Carter"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                  <label>Email</label>
                  <input
                    className="border-2 rounded px-3 py-1 w-full"
                    placeholder="Email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <label>Password</label>
                <input
                  className="border-2 rounded px-3 py-1 w-full"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <label>Bio</label>
                <textarea className="border-2 rounded px-3 py-1 h-20 w-full"
                  placeholder="About yourself"
                  value={about}
                  onChange={(event) => setAbout(event.target.value)}
                  required
                />
              </div>
              {/* <div>
                <label>Profile Picture</label>
                <input type="file" accept="image/*" onChange={(event) => {
                  if (event.target.files && event.target.files.length > 0) {
                    setProfilePicture(event.target.files[0]);
                  } else {
                    setProfilePicture(null);
                  }
                }}/>
              </div> */}
              <div className="flex gap-4">
                <input type="checkbox" className="self-start my-2" />
                <div className="flex flex-col">
                  <p className="text-gray-500">
                    I have read and accepted the SkillSpace App Ltd. <br />
                    Terms & Conditions and Privacy Policy.
                  </p>
                </div>
              </div>
              <button className="bg-blue-600 text-white font-bold rounded py-2 w-full sm:w-auto mt-5" type="submit">
                Sign up
              </button>
              <button 
                className="text-green underline mt-3 w-full sm:w-auto"
                onClick={handleCompanySignup}>Signup as a company?</button>
            </div>
          </div>

          {/* Our Numbers Container */}
          <div className="flex flex-col items-center px-4 py-8 sm:px-16 sm:py-10 rounded">
            <div className="flex flex-col items-center gap-3">
              <p className="font-bold text-3xl sm:text-4xl">Our numbers</p>
              <p className="text-gray-500 text-sm sm:text-base">
                This is a test message I will come back to it later on to fix it
                so that it makes sense. I will come back to it later on to finalize it.
              </p>
            </div>
            <div className="container m-auto mt-8">
              <div className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto justify-items-center">
                <div className="flex justify-center gap-7 py-5 px-3 w-full max-w-xs rounded-lg border-2">
                  <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold">
                      20,583 <span className="text-blue-500">+</span>
                    </p>
                    <p className="text-gray-400 text-xs font-bold mt-3">
                      JOB POSTED
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-7 py-5 px-3 w-full max-w-xs rounded-lg border-2">
                  <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold">
                      581 <span className="text-blue-500">+</span>
                    </p>
                    <p className="text-gray-400 text-xs font-bold mt-3">
                      VERIFIED COMPANIES
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-7 py-5 px-3 w-full max-w-xs rounded-lg border-2">
                  <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold">
                      3,896 <span className="text-blue-500">+</span>
                    </p>
                    <p className="text-gray-400 text-xs font-bold mt-3">
                      SUCCESSFUL HIRES
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-7 py-5 px-3 w-full max-w-xs rounded-lg border-2">
                  <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold">
                      100K <span className="text-blue-500">+</span>
                    </p>
                    <p className="text-gray-400 text-xs font-bold mt-3">
                      MONTHLY VISITS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )}
</div>

  );
}

export default SignupUser;
