import React from "react";
import Navbar from "../Components/Navbar";
import TopMovies from "../Components/LandingPage/TopMovies";
import "./LandingPage.css"; 
import LoggedInAs from "../Components/LoggedInAs/LoggedInAs";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <TopMovies />
      <LoggedInAs/>

    </div>
  );
};

export default LandingPage;
