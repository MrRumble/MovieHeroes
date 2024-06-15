import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./NavBar.css";
import MovieHero from "../assets/MovieHero.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <div className="navbar">
        <h1>
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
          </span>
          <span
            className={`nav-link ${currentPage === "/myprofile" ? 'active' : ''}`}
            onClick={() => handleNavigation("/myprofile")}
          >
            My Profile
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
