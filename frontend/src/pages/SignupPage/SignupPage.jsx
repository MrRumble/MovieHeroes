// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import validatePassword from "./passValidator";
// import { signup } from "../../services/authentication";
//import "./SignupPage.css";

const SignupPage = () => {
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [passwordError, setPasswordError] = useState("");
// // const [validationError, setValidationError] = useState("");
// // const [profilePicture, setProfilePicture] = useState(null);
// const navigate = useNavigate();

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

// const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log("Form submitted");

//     if (passwordError) {
//     setValidationError('Please correct the errors before submitting.');
//     return;
//     }

//     const formData = new FormData();
//     formData.append('firstName', firstName);
//     formData.append('lastName', lastName);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('DOB', DOB);
//     formData.append('gender', gender);
//     formData.append('profilePicture', profilePicture);

//     try {
//     console.log("Submitting form data", formData);
//     await signup(formData);
//     console.log("redirecting...");
//     navigate("/login");
//     } catch (err) {
//     console.error("Signup error:", err);
//     if (err.response && err.response.status === 409) {
//         setValidationError('Email already exists. Please use a different email.');
//     } else {
//         setValidationError('Something went wrong, please try again.');
//     }
//     }
// };

// const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
// };
// const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
// };
// const handleEmailChange = (event) => {
//     setEmail(event.target.value);
// };
// const handleDOBChange = (event) => {
//     setDOB(event.target.value);
// };
// const handleGenderChange = (event) => {
//     setGender(event.target.value);
// };

// const getMinDOB = () => {
//     const today = new Date();
//     today.setFullYear(today.getFullYear() - 100);
//     return today.toISOString().split('T')[0];
// };

// const getMaxDOB = () => {
//     const today = new Date();
//     today.setFullYear(today.getFullYear() - 13);
//     return today.toISOString().split('T')[0];
// };

return (
    <div className="signup-title"> 
    <h2>Sign Up for Your Free Account!</h2>
    <form >
    {/* onSubmit={handleSubmit} */}
        <label htmlFor="firstName">First Name:</label>
        <input
        placeholder="First Name"
        id="firstName"
        type="text"
        // value={firstName}
        // onChange={handleFirstNameChange}
        />
        <label htmlFor="email">Email:</label>
        <input
        placeholder="user@email.com"
        id="email"
        type="email"
        // value={email}
        // onChange={handleEmailChange}
        />
        <label htmlFor="password">Password:</label>
        <input
        placeholder="Password"
        id="password"
        type="password"
        // value={password}
        // onChange={handlePasswordChange}
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