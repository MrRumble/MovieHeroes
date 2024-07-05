import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authentication";
import { Link } from 'react-router-dom';
import Navbar from "../../Components/Navbar";
import BackdropSlider from "../../Components/BackdropSlider/BackdropSlider"; // Import the BackdropSlider component
import "./LoginPage.css";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
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
            if (typeof (loginResponse) === "string") {
                setErrorMessage(loginResponse);
            } else {
                console.log("redirecting...:");
                localStorage.setItem("token", loginResponse.token);
                localStorage.setItem("userId", loginResponse.userId);
                localStorage.setItem("email", loginResponse.email);
                localStorage.setItem("full_name", loginResponse.full_name);
                localStorage.setItem("user_id", loginResponse.user_id);
                setErrorMessage("");
                navigate("/myprofile");
            }
        } catch (err) {
            console.error(err);
            navigate("/login");
        }
    };

    return (
        <>
            <Navbar />
            <BackdropSlider /> {/* Render the BackdropSlider component */}
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
                    <div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                </form>

                <div className="login-redirect">
                    <p> If you do not have an account</p>
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        </>
    );
};
