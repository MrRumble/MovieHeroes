import React from "react";
import Navbar from "../Components/Navbar";
import TopMovies from "../Components/LandingPage/TopMovies";
import "./LandingPage.css"; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <TopMovies />
    </div>
  );
};

export default LandingPage;
