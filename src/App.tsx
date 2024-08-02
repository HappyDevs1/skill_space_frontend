import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Blog from "../src/components/Blog";
import Login from "../src/components/Login";
import Signup from "../src/components/Signup";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  }
  const logout = () => {
    setIsAuthenticated(false);
  }

  return (
    <div className="">
      <nav className="flex h-20 items-center border-b-2">
        <div className="items-start ml-20">
          <a href="/">SkillSpace</a>
        </div>
        <div className="ml-auto">
          <ul className="flex gap-10 mr-20">
            <li className="hover:text-sky-500">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-sky-500">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-sky-500">
              <a href="/blog">Blog</a>
            </li>
            <li className="hover:text-sky-500">
              <a href="/contact">Contact</a>
            </li>
            <li>
              {isAuthenticated ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <button onClick={login}>Login</button>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
