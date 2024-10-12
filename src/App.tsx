import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Blog from "../src/components/Blog";
import Login from "../src/components/Login";
import Signup from "../src/components/Signup";
import SearchedJobsPage from "./components/SearchedJobsPage";
import ViewJob from "./components/ViewJob";
import PostJobForm from "./components/PostJobForm";
import Profile from "./components/Profile";

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
          <Route path="/login" element={
            <Login
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/filter" element={<SearchedJobsPage />} />
          <Route path="/job/:id" element={<ViewJob />} />
          <Route path="/create" element={<PostJobForm />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
    </div>
  )
}

export default App;