import { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleErrors from "../HandleErrors";
import { signup } from "../../services/authentication";
//import "./SignupPage.css";

const SignupPage = () => {
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [userErrors, setUserErrors] = useState({})
const [isFocused, setIsFocused] = useState(false);
const [resp, setResp] = useState("")
const navigate = useNavigate();

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleOnFocus = () => { 
        setIsFocused(true); 
    }; 

    const handleBlur = () => { 
        setIsFocused(false);
        const errors = handleErrors(password, email)
        setUserErrors(()=>errors)
    }; 

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted");
        try {
            const response = await signup(fullName, email, password);
            if(typeof(response) === "string"){
                setResp(response)
            }else{
            console.log("redirecting...:");
                setResp("")
            navigate("/"); // add login later
            }
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
        onFocus={handleOnFocus}
        onBlur={handleBlur}
        />
        <div>
            {resp? 
            <p>{resp}</p>
            :
            null
            }
        </div>

        <div>
            {userErrors.email_errors && userErrors.email_errors.length > 0 && !isFocused && (
                <div>
                    {userErrors.email_errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}<br/>
        </div>
        <label htmlFor="password">Password:</label>
        <input
        placeholder="Password"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        onFocus={handleOnFocus}
        onBlur={handleBlur}
        />
        <div>
            {userErrors.pwd_errors && userErrors.pwd_errors.length > 0 && !isFocused && (
                <div>
                    {userErrors.pwd_errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}<br />
        </div>
        <input role="submit-button" id="submit" type="submit" value="Submit" />
    </form>
    </div>
);
};

export default SignupPage