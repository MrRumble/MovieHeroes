import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import "./MyProfile.css"; 

const MyProfilePage = () => {

  const fullName = localStorage.getItem("full_name");
  const email = localStorage.getItem("email");
  const userId = localStorage.getItem("userId");

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
  const handleAvatarChange = (avatar) => {
    setSelectedAvatar(avatar);
    // can implement logic to save selected avatar in state or localStorage <- Decide (nice to have)
    console.log("this is the avatar selected", avatar);
  };
  // function to submit avatar selection
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted", avatar)

    try {
        const avatarSelected = await updateAvatar(token, avatar);
//         if(typeof(loginResponse) === "string"){
//             setErrorMessage(loginResponse)
//         }else{
//             console.log("redirecting...:");
//             localStorage.setItem("token", loginResponse.token);
//             localStorage.setItem("userId", loginResponse.userId);
//             // I added two fields to local storage below for access on 'Myprofile' page. James.
//             localStorage.setItem("email", loginResponse.email); 
//             localStorage.setItem("full_name", loginResponse.full_name);
//             setErrorMessage("")
//             navigate("/myprofile");//user homePage
//         }
//     } catch (err) {
//         console.error(err);
//         navigate("/login");
//     }
// }

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
        <form onSubmit={handleSubmit}>
        <div className="avatar-options">
          {avatarOptions.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index}`}
              className={`avatar ${avatar === selectedAvatar ? 'selected' : ''}`}
              value={avatar}
              onClick={() => handleAvatarChange(avatar)}
            />
          ))}
        </div>
        <br/>
        <div>
        <input role="submit-button" id="submit" type="submit" value="Save Avatar" />
        </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfilePage;
