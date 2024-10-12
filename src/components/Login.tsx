import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
import CircularIndeterminate from "./CircularIndeterminate";
import { FaRegUserCircle } from "react-icons/fa";

type NavBarProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
};

function Login({ isAuthenticated, setIsAuthenticated }: NavBarProps) {
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
        console.log(isAuthenticated)
      }
      
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error loggin in user.");
    }
  }

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div>
      {
        loading ? (
          <div>
          <CircularIndeterminate />
          </div>
        ) : (
          <div className="container mx-auto p-4 flex justify-center">
        <form onSubmit={handleSubmit}>
        <div className="grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col bg-white rounded-lg border-2 py-16 px-20">
            <div className="border-2 px-3 py-2 mb-4 rounded-xl self-start">
          <FaRegUserCircle className="text-5xl text-blue-500"/>
            </div>
            <div className="flex flex-col gap-2 mb-7">
              <p className="font-bold text-3xl">Welcome back</p>
              <p className="text-gray-500">Please fill your email and password to sign in.</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <label>Email</label>
                <input className="border-2 px-2 py-1" placeholder="Email address"
                onChange={(event) => {setEmail(event.target.value)}}
                value={email}/>
              </div>
              <div className="flex flex-col gap-3">
                <label>Password</label>
                <input className="border-2 px-2 py-1" placeholder="Enter your password"
                onChange={(event) => {setPassword(event.target.value)}}
                value={password}/>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                <input type="checkbox" />
                <p className="text-gray-500">Remember me</p>
                </div>
                <a className="underline self-end">Forgot password?</a>
              </div>
              <button className="bg-blue-500 text-white font-bold rounded py-1">Login</button>
              <div className="flex justify-center">
              <p className="text-gray-500">Don't have an account?
              <button className="text-black underline ml-2" type="submit" onClick={navigateToSignUp}>Sign up today?</button>
              </p>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
        )
      }
    </div>
  )
}

export default Login;