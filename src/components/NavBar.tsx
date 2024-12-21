import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

type NavBarProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
};

function NavBar({ isAuthenticated, setIsAuthenticated }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const [isCompany, setIsCompany] = useState<boolean>(false);
  let navigate = useNavigate();


  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    navigate("/user/login");
  };

  const confirmLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout();
    }
  };

  const handleMyJobs = async () => {
    try {
      const userId = localStorage.getItem("user");
      navigate(`/profile/user/${userId}`)
    } catch (error) {
      console.error("Failed to redirect to jobs under this profile", error);
    }
  }

  const checkRole = async () => {
    try {
      const userRole:any = localStorage.getItem("role");
      setIsCompany(userRole);
      if (userRole === "true") {
        setIsCompany(true);
        console.log("Role is definitely company")
      } else if (userRole === "false") {
        setIsCompany(false);
        console.log("Role is definitely not user")
      } else {
        console.log("Role state not found")
      }
      console.log("Is it a company? ", userRole)
    } catch (error) {
      console.error("Failed to check role", error);
    }
  }

  useEffect(() => {
    checkRole()
  }, [])

  return (
    <nav className="flex items-center justify-between h-20 border-b-2 px-4 md:px-10">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center font-semibold text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-1.5 text-sky-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>
          SkillSpace
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex gap-6 md:gap-10">
          <li className="hover:text-sky-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-sky-500">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-sky-500">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-sky-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {isAuthenticated ? (
              <div className="flex gap-6 md-gap-10">
                {
                  isCompany === true ? (
                    <li>
                      <button onClick={() => navigate("/company/jobs")}>My Jobs</button>
                    </li>
                  ) : (
                    <li>
                      <button onClick={() => navigate("/user/job/applications")}>My Applications</button>
                    </li>
                  )
                }
                <button
                className="flex items-center bg-red-600 px-3 py-1 rounded-md text-white"
                onClick={confirmLogout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mx-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                Logout
              </button>
              </div>
            ) : (
              <li>
                <Link to="/user/login" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mx-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                Login
              </Link>
              </li>
            )}
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          className="p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t-2 shadow-md z-10 md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            <li className="hover:text-sky-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-sky-500">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-sky-500">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-sky-500">
              <Link to="/contact">Contact</Link>
            </li>
              {isAuthenticated ? (
                <button
                  className="flex items-center bg-red-600 px-3 py-1 rounded-md text-white"
                  onClick={confirmLogout}
                >
                  Logout
                </button>
              ) : (
                <Link to="/user/login" className="flex items-center">
                  Login
                </Link>
              )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
