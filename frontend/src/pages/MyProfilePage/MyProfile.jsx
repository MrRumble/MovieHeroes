import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import "./MyProfile.css"; 

const MyProfilePage = () => {

  const fullName = localStorage.getItem("full_name");
  const email = localStorage.getItem("email");

  // State to track selected avatar (just for demonstration)
  const [selectedAvatar, setSelectedAvatar] = useState(null);

// CAN EASILY AMMEND THESES URL LINKS TO DATABASE (COULD BE A NICE TO HAVE FOR NOW?)
  const avatarOptions = [
    "https://emoji.beeimg.com/👽/150/apple",
    "https://emoji.beeimg.com/😎/150/apple", 
    "https://emoji.beeimg.com/ 😱/150/apple",
    "https://emoji.beeimg.com/ 🦁/150/apple"

  ];

  // Function to handle avatar selection
  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
    // can implement logic to save selected avatar in state or localStorage <- Decide (nice to have)
  };

  return (
    <div className="my-profile-page">
      <Navbar userName={fullName} /> 
      <h1 className="profile-heading">MY PROFILE</h1>
      <div className="profile-details">
        <p>
          <strong>User Name:</strong> {fullName || "Not available"}
        </p>
        <p>
          <strong>Email:</strong> {email || "Not available"}
        </p>
        <p>
          <strong>My Favourite Films:</strong>
        </p>
        Top ranked films...?
      </div>
      {/* Avatar selection area */}
      <div className="avatar-selection">
        <h2>Choose Your Avatar:</h2>
        <div className="avatar-options">
          {avatarOptions.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index}`}
              className={`avatar ${avatar === selectedAvatar ? 'selected' : ''}`}
              onClick={() => handleAvatarClick(avatar)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
