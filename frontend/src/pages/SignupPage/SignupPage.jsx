import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import validatePassword from "./passValidator";
import { signup } from "../../services/authentication";
//import "./SignupPage.css";

const SignupPage = () => {
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
// const [passwordError, setPasswordError] = useState("");
// // const [validationError, setValidationError] = useState("");
// // const [profilePicture, setProfilePicture] = useState(null);
const navigate = useNavigate();

// // const handlePasswordChange = (event) => {

// //     const value = event.target.value;
// //     setPassword(value);
// //     if (!validatePassword(value)) {
// //     setPasswordError('Password must be at least 7 characters long, contain one uppercase letter, and one of {!$%&}');
// //     } else {
// //     setPasswordError('');
// //     }
// // };

// // const handleProfileImgChange = (event) => {
// //     setProfilePicture(event.target.files[0]);
// // };


    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted");
        try {
            await signup(fullName, email, password);
            console.log("redirecting...:");
            navigate("/"); // add login later
        } catch (err) {
            console.error(err);
            navigate("/signup");
        }
    }

return (
    <div className="signup-title"> 
    <h2>Sign Up for Your Free Account!</h2>
    <form onSubmit={handleSubmit} >
        <label htmlFor="fullName">Full Name:</label>
        <input
        placeholder="Enter your full name..."
        id="fullName"
        type="text"
        value={fullName}
        onChange={handleFullNameChange}
        />
        <label htmlFor="email">Email:</label>
        <input
        placeholder="user@email.com"
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        />
        <label htmlFor="password">Password:</label>
        <input
        placeholder="Password"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        />
        
        {/* <label htmlFor="profilePicture">Profile Picture:</label>
        <input 
        id="profilePicture"
        type="file"
        onChange={handleProfileImgChange}
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
        {validationError && <div className="error-message">{validationError}</div>}  */}
        <input role="submit-button" id="submit" type="submit" value="Submit" />
    </form>
    </div>
);
};

export default SignupPage