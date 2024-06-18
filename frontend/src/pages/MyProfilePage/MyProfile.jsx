import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import "./MyProfile.css"; 
import {updateAvatar, getAvatarByUserById} from "../../services/user"

const MyProfilePage = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [userAvatar, setUserAvatar] = useState("")

  const fullName = localStorage.getItem("full_name");
  const email = localStorage.getItem("email");
  const token = localStorage.getItem('token');

  // State to track selected avatar (just for demonstration)
  

// CAN EASILY AMMEND THESES URL LINKS TO DATABASE (COULD BE A NICE TO HAVE FOR NOW?)
  const avatarOptions = [
    "https://emoji.beeimg.com/👽/150/apple",
    "https://emoji.beeimg.com/😎/150/apple", 
    "https://emoji.beeimg.com/ 😱/150/apple",
    "https://emoji.beeimg.com/ 🦁/150/apple"
  ]

  // function to submit avatar selection
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const avatarSelected = await updateAvatar(token, selectedAvatar);
        setUserAvatar(avatarSelected);
    } catch (error) {
        console.error("Failed to update avatar:", error);
    }
};

  useEffect(() => {
    if (token) {
        getAvatarByUserById(token)
            .then(avatar => {
                setUserAvatar(avatar);
            })
            .catch(err => {
                console.error("Failed to fetch avatar:", err);
            });
    }
  }, [token]);


  return (
    <div className="my-profile-page">
      <Navbar userName={fullName} /> 
      <h1 className="profile-heading">MY PROFILE</h1>
      <div className="profile-details">
        <p>
          <img src={userAvatar} alt='avatar'/>
        </p>
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
              onClick={() => setSelectedAvatar(avatar)}
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
