import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "./LoginPage.css"; // Import the CSS file
import { login } from "../../services/authentication";
import { Link } from 'react-router-dom';

export const LoginPage = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState(""); // State variable for error message
const navigate = useNavigate();

const handleEmailChange = (event) => {
    setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    const loginResponse = await login(email, password);
    localStorage.setItem("token", loginResponse.token);
    localStorage.setItem("userId", loginResponse.userId);

    navigate("/posts");
    } catch (err) {
    console.error(err);
    setErrorMessage("Incorrect email or password"); // Set error message
    }
};

return (
    <>
    <div>
        <div className="login-tile">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
            />
            <label htmlFor="password">Password:</label>
            <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            />
            <input role="submit-button" id="submit" type="submit" value="login" />
            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Render error message if present */}
        </form>

        <div>
            <p> If you do not have an account</p>
            <Link to="/signup">Signup</Link>
        </div>
        </div>
    </div>
    </>
);
};