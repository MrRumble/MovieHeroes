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
    navigate("/tmdb-trending");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/myprofile");
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

        {currentPage !== "/myprofile" && (
          <>
          <button className="Myprofile-button" onClick={handleProfile}>
            My Profile
          </button>
          <button className="nav-button" onClick={logOut}>Sign Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
