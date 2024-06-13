import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React from "react";
// import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
//   const location = useLocation();
//   const currentPath = location.pathname;


  const handleLogin = () => {
    navigate("/login");
  };

  const handleAbout = () => {
    navigate("/About");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleTmdb = () => {
    navigate("/tmdb-trending");
  };

  const handleHome = () => {
    navigate ("/");
  }

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/login");
// //   };

//   const handleFeed = () => {
//     navigate("/posts");
//   };

  return (
    <nav>
      <div className="navbar">
        <button className="Home-button" onClick={handleHome}>
          Home
        </button>


          <button className="profile-button" onClick={handleLogin}>
            Login
          </button>
      
        <button className="signup-button" onClick={handleSignup}>
          Signup
        </button>

        <button className="About-button" onClick={handleAbout}>
          About
        </button>

        <button className="Tmdb-button" onClick={handleTmdb}>
          TMDB Trending
        </button>
      </div>
    </nav>
  );
};


export default Navbar;
