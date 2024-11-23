import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

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
          <Route path="/job/:id" element={<ViewJob />} />
          <Route path="/create/job" element={<PostJobForm />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/profile/company/:id" element={<CompanyProfile />} />
          <Route path="/about/:id" element={<AboutCompany />} />
        </Routes>
    </div>
  )
}

export default App;