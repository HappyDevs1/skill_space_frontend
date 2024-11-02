import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularIndeterminate from "./CircularIndeterminate";

function SignUpCommpany () {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleUserSignup = async () => {
    try {
      navigate("/user/signup");
    } catch (error) {
      console.log("Error redirecting to the user signup page", error);
    }
  }
  return (
<div>
      {
        loading ? (
          <div>
            <CircularIndeterminate />
          </div>
        ) : (
          // <form onSubmit={handleSubmit}>
        <div className="flex mt-24 justify-center mb-20">
          <div className="px-16 py-10 rounded border-2">
            <p className="text-3xl mb-3 font-bold">Create account</p>
            <div className="flex items-center gap-2">
              <p className="text-gray-500">Already have an account?</p>
              {/* <button className="underline" onClick={redirectToLogin}>Sign in.</button> */}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 mt-5">
                <div className="flex flex-col gap-3">
                  <label>Name</label>
                  <input
                    className="border-2 rounded px-3 py-1"
                    placeholder="John Carter"
                    // value={name}
                    // onChange={(event) => {
                    //   setName(event.target.value);
                    // }}
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label>Email</label>
                  <input
                    className="border-2 rounded px-3 py-1"
                    placeholder="Email address"
                    // value={email}
                    // onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label>Password</label>
                <input
                  className="border-2 rounded px-3 py-1"
                  placeholder="Enter your password"
                  type="password"
                  // value={password}
                  // onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>
                  Are you looking for a job or are you looking to hire?
                </label>
                {/* <select
                  className="border-2 rounded px-3 py-1"
                  value={role}
                  // onChange={(event) => setRole(event.target.value)}
                >
                  <option value={freelancer}>I want a job</option>
                  <option value={client}>I want to hire</option>
                </select> */}
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
                    I have read accepted the SkillSpace App Ltd. <br />
                    Terms & Conditions and Private Policy.
                  </p>
                </div>
              </div>
              <button className="bg-blue-600 text-white font-bold rounded py-1" type="submit">
                Sign up
              </button>
              <button 
              onClick={handleUserSignup}
              className="underline">
                Signup as an individual user?
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center px-16 py-10 rounded">
            <div className="flex flex-col items-center gap-3">
              <p className="font-bold text-4xl">Our numbers</p>
              <p className="text-gray-500">
                This is a test message I will come back to it later on to fix it
                so <br /> that it makes sense. I will come back to it later on
                to finalise it.
              </p>
            </div>
            <div className="container m-auto">
              <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto justify-items-center">
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
      // </form>
        )
      }
    </div>
  )
}

export default SignUpCommpany;