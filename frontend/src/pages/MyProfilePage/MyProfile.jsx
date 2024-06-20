import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import "./MyProfile.css"; 
import {updateAvatar, getAvatarByUserById} from "../../services/user"
import BackdropSlider from "../../Components/BackdropSlider/BackdropSlider"; // Import the BackdropSlider component
import { useNavigate } from "react-router-dom";

const MyProfilePage = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [userAvatar, setUserAvatar] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate();

  const fullName = localStorage.getItem("full_name");
  const email = localStorage.getItem("email");
  const token = localStorage.getItem('token');

  // State to track selected avatar (just for demonstration)
  

// CAN EASILY AMMEND THESES URL LINKS TO DATABASE (COULD BE A NICE TO HAVE FOR NOW?)
  const avatarOptions = [
    "src/assets/captainAmerica.png",
    "src/assets/batman.png",
    "src/assets/superman.png",
    "src/assets/hulk.png",
    "src/assets/ironman.png",
    "src/assets/robocop.png",
    "src/assets/flask.png",
    "src/assets/spiderman.png",
  ]

  // function to submit avatar selection
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const avatarSelected = await updateAvatar(token, selectedAvatar);
        setUserAvatar(avatarSelected);
        setIsVisible(!isVisible)
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
    <div >
      <Navbar userName={fullName} />
      <BackdropSlider /> {/* Render the BackdropSlider component */}
      <div className="my-profile-page">
        <h2 className="profile-heading">{fullName}'s Profile</h2>
        <div className="profile-detailsPage">
          <p>
            {userAvatar? <img src={userAvatar} className="user-avatar"alt='avatar'/> : ""}
          </p>
          <button onClick={()=>setIsVisible(!isVisible)} id="selectAvatar" >
            {isVisible? "Cancel" : "Choose your Hero"}
          </button>

          {isVisible && (
            <div className="avatar-selection">
              <h3>Choose Your Avatar:</h3>
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
                  <input role="submit-button" id="submit"  type="submit" value="Save Avatar" />
                </div>
              </form>
          </div>
            )}
          <div className="user-details">
            <p>
              <strong>User Name:</strong> {fullName || "Not available"}
            </p>
            <p>
              <strong>Email:</strong> {email || "Not available"}
            </p>
          </div>
        </div>
        <button onClick={()=>{navigate("/initial_ratings")}} id="selectAvatar">Rate your favorite movies</button>
      </div>
    </div>
  );
};

export default MyProfilePage;
