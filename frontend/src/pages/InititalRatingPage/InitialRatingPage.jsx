import React from "react";
import Navbar from "../../Components/Navbar";
import InitialRatings from "../../Components/InitialRatings/InitialRatings";

const InititalRatingsPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <InitialRatings />
    </div>
  );
};
export default InititalRatingsPage;