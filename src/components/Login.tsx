import { FaRegUserCircle } from "react-icons/fa";

function Login() {
  return (
    <div>
      <div className="container mx-auto p-4 flex justify-center">
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
                <input className="border-2 px-2 py-1" placeholder="Email address"/>
              </div>
              <div className="flex flex-col gap-3">
                <label>Password</label>
                <input className="border-2 px-2 py-1" placeholder="Enter your password"/>
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
              <button className="text-black underline ml-2">Sign up today?</button>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;