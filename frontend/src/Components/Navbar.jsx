import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./NavBar.css";
import MovieHero from "../assets/MovieHero.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");

  // Update currentPage based on location.pathname changes
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleAbout = () => {
    navigate("/about");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleTmdb = () => {
    navigate("/tmdb_trending");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/my_profile");
  };

  return (
    <nav>
      <div className="navbar">
        {currentPage !== "/" && (
          <button className="Home-button" onClick={handleHome}>
            Home
          </button>
        )}

        {currentPage !== "/login" && (
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
          <img
            src={MovieHero}
            className="navbar-logo"
            alt="Movie Heroe logo"
          />
          MovieHeroes
        </h1>

        {currentPage !== "/about" && (
          <button className="About-button" onClick={handleAbout}>
            About
          </button>
        )}

        {currentPage !== "/tmdb-trending" && (
          <button className="Tmdb-button" onClick={handleTmdb}>
            TMDB Trending
          </button>
        )}

        {currentPage !== "/my_profile" && (
          <button className="Myprofile-button" onClick={handleProfile}>
            My Profile
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
