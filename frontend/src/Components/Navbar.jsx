import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";
import MovieHero from "../assets/MovieHero.png";

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
    navigate("/"); // Navigate to the landing page once logged out
    setUserName("");
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate('/login');  // Redirect to the login page after logging out
};

  return (
    <nav>
      <div className="navbar">

        {currentPage !== "/" && (
          <button className="Home-button" onClick={handleHome}>
            Home
          </button>
        )}

        {currentPage !== "/login" && currentPage === "/signup" && (
          <button className="profile-button" onClick={handleLogin}>
            Login
          </button>
        )}

        {currentPage !== "/signup" && (
          <button className="signup-button" onClick={handleSignup}>
            Signup
          </button>
        )}

        <h1>

        <h1 className="navbar-title">

          <img
            src={MovieHero}
            className="navbar-logo"
            alt="Movie Hero logo"
          />
          MovieHeroes
        </h1>
        <div className="nav-links">
          <span
            className={`nav-link ${currentPage === "/" ? 'active' : ''}`}
            onClick={() => handleNavigation("/")}
          >
            Home
          </span>
          <span
            className={`nav-link ${currentPage === "/about" ? 'active' : ''}`}
            onClick={() => handleNavigation("/about")}
          >
            About
          </span>
          <span
            className={`nav-link ${currentPage === "/tmdb-trending" ? 'active' : ''}`}
            onClick={() => handleNavigation("/tmdb-trending")}
          >
            TMDB Trending
          </>

          </span>
          <span
            className={`nav-link ${currentPage === "/myprofile" ? 'active' : ''}`}
            onClick={() => {
              if (userName) {
                handleNavigation("/myprofile");
              } else {
                handleNavigation("/signup");
              }
            }}
          >
            My Profile
          </span>
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
          {userName && (
            <button className="nav-link" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
        {userName && (
          <div className="logged-in-as">
            Logged in as: {userName}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
