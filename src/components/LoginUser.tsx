import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
import CircularIndeterminate from "./CircularIndeterminate";
import { FaRegUserCircle } from "react-icons/fa";

type NavBarProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
};

function Login({
  isAuthenticated,
  setIsAuthenticated,
}: NavBarProps): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const redirectUrl = await loginUser(formData);
      console.log(redirectUrl);

      if (redirectUrl) {
        navigate(redirectUrl);

        setIsAuthenticated(true);
        console.log(isAuthenticated);
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error loggin in user.");
    }
  };

  const navigateToSignUp = () => {
    navigate("/user/create");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      {loading ? (
        <div>
          <CircularIndeterminate />
        </div>
      ) : (
        <div className="container mx-auto p-4 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl md:max-w-4xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
              <div className="flex flex-col bg-white rounded-lg border-2 py-16 px-6 sm:px-12 md:px-16">
                      <button
                        className="self-start text-red-400 underline ml-2 text-sm sm:text-base"
                        type="submit"
                        onClick={() => {navigate("/company/login")}}
                      >
                        Sign in as a company?
                      </button>
                <div className="border-2 px-3 py-2 mb-4 mt-4 rounded-xl self-start">
                  <FaRegUserCircle className="text-5xl text-blue-500" />
                </div>
                <div className="flex flex-col gap-2 mb-7">
                  <p className="font-bold text-2xl sm:text-3xl">Welcome back</p>
                  <p className="text-gray-500 text-sm sm:text-base">
                    Please fill your email and password to sign in.
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm sm:text-base">Email</label>
                    <input
                      className="border-2 px-2 py-1 rounded-md"
                      placeholder="Email address"
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm sm:text-base">Password</label>
                    <input
                      className="border-2 px-2 py-1 rounded-md"
                      placeholder="Enter your password"
                      onChange={(event) => setPassword(event.target.value)}
                      value={password}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <input type="checkbox" />
                      <p className="text-gray-500 text-sm sm:text-base">
                        Remember me
                      </p>
                    </div>
                    <a className="text-sm sm:text-base text-blue-500 hover:underline self-end">
                      Forgot password?
                    </a>
                  </div>
                  <button className="bg-blue-500 text-white font-bold rounded py-2 mt-4 w-full sm:w-auto">
                    Login
                  </button>
                  <div className="flex justify-center mt-4">
                    <p className="text-gray-500 text-sm sm:text-base">
                      Don't have an account?{" "}
                      <button
                        className="text-black underline ml-2 text-sm sm:text-base"
                        type="submit"
                        onClick={navigateToSignUp}
                      >
                        Sign up today?
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
