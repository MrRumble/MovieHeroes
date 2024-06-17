import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const LoggedInAs = () => {
  const location = useLocation();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Retrieve userName from localStorage
    const storedUserName = localStorage.getItem("full_name");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [location.pathname]);

  return (
    <div>
      {userName && (
        <div className="logged-in-as">
          Logged in as: {userName}
        </div>
      )}
    </div>
  );
};

export default LoggedInAs;
