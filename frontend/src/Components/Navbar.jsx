import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";
import MovieHero from "../assets/MovieHero.png";
import MovieHeroPurple from "../assets/MovieHeroPurple.jpg";
import LoggedInAs from "./LoggedInAs/LoggedInAs"; // Import LoggedInAs component
import SearchBar from "./SearchBar/SearchBar";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // Retrieve userName from localStorage
    const storedUserName = localStorage.getItem("full_name");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    setUserName(""); // Clear userName state
    navigate("/"); // Navigate to the landing page once logged out
  };

  return (
    <nav>
      <div className="navbar">
        <span
          className={`nav-logo ${currentPage === "/" ? 'active' : ''}`}
          onClick={() => handleNavigation("/")}
        >
          <h1 className="navbar-title">
            <img
              src={MovieHeroPurple}
              className="navbar-logo"
              alt="Movie Hero logo"
            />
            MovieHeroes
          </h1>
        </span>
        <div className="nav-links">
          <span
            className={`nav-link ${currentPage === "/about" ? 'active' : ''}`}
            onClick={() => handleNavigation("/about")}
          >
            About
          </span>

          <span
            className={`nav-link ${currentPage === "/yourpicks" ? 'active' : ''}`}
            onClick={() => handleNavigation("/yourpicks")}
          >
            Your Picks
          </span>

          <span
            className={`nav-link ${currentPage === "/tmdb-trending" ? 'active' : ''}`}
            onClick={() => handleNavigation("/tmdb-trending")}
          >
            TMDB Trending
          </span>
          <span
            className={`nav-link ${currentPage === "/myprofile" ? 'active' : ''}`}
            onClick={() => {
              if (userName) {
                handleNavigation("/myprofile");
              } else {
                handleNavigation("/login");
              }
            }}
          >
            My Profile
          </span>
          {!userName && (
            <>
              <span
                className={`nav-link ${currentPage === "/login" ? 'active' : ''}`}
                onClick={() => handleNavigation("/login")}
              >
                Login
              </span>
              <span
                className={`nav-link ${currentPage === "/signup" ? 'active' : ''}`}
                onClick={() => handleNavigation("/signup")}
              >
                Signup
              </span>
            </>
          )}          
          {userName && (
            <button className={`nav-link ${currentPage === "/logout" ? 'active' : ''}`} onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
      {/* Pass userName prop to LoggedInAs component */}
      <LoggedInAs userName={userName} />
    </nav>
  );
};

export default Navbar;
