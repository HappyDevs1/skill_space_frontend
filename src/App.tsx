import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Blog from "../src/components/Blog";
import Login from "./components/LoginUser";
import LoginCompany from "./components/LoginCompany";
import SignupUser from "./components/SignupUser";
import SearchedJobsPage from "./components/SearchedJobsPage";
import ViewJob from "./components/ViewJob";
import PostJobForm from "./components/PostJobForm";
import UserProfile from "./components/UserProfile";
import CompanyProfile from "./components/CompanyProfile";
import AboutCompany from "./components/AboutCompany";
import SignUpCompany from "./components/SignupCompany";
import Companies from "./components/Companies";
import ViewBlog from "./components/ViewBlog";
import JobApplication from "./components/JobApplication";
import CompanyJobs from "./components/CompanyJobs";
import JobApplicants from "./components/JobApplicants";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Failed to fetch token from local storage");
    }
  })

  return (
    <div className="">
        <NavBar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/login" element={
            <Login
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          />}
          />
          <Route path="/company/login" element={
            <LoginCompany
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          />}
          />
          <Route path="/user/create" element={<SignupUser />} />
          <Route path="/company/create" element={<SignUpCompany />} />
          <Route path="/filter" element={<SearchedJobsPage />} />
          <Route path="/company/jobs" element={isAuthenticated ? <CompanyJobs /> : <LoginCompany isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/job/:id" element={<ViewJob />} />
          <Route path="job/apply/:id" element={isAuthenticated ? <JobApplication /> : <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/job/applicants/:id" element={<JobApplicants />} />
          <Route path="/create/job" element={isAuthenticated ? <PostJobForm /> : <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="/view/companies" element={<Companies />} />
          <Route path="/profile/user/:id" element={isAuthenticated ? <UserProfile /> : <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/profile/company/:id" element={<CompanyProfile />} />
          <Route path="/about/company/:id" element={<AboutCompany />} />
          <Route path="/view/blog" element={<ViewBlog />} />
        </Routes>
    </div>
  )
}

export default App;