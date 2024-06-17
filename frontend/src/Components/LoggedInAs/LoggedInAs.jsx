import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./LoggedInAs.css";  // Import the CSS file

const LoggedInAs = ({ userName }) => {  // Remove setUserName from props
  const location = useLocation();

  useEffect(() => {
    // No need to set userName state here; it's already passed as prop
  }, [location.pathname]);

  return (
    <div>
      {userName && (
        <div className="logged-in-as-container">
          <p className="logged-in-as">Logged in as: {userName}</p>
        </div>
      )}
    </div>
  );
};

export default LoggedInAs;
