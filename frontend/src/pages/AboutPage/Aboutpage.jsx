// Aboutpage.jsx

import React from 'react';
import Navbar from "../../Components/Navbar";
import "./Aboutpage.css";
import BackdropSlider from "../../Components/BackdropSlider/BackdropSlider";

const Aboutpage = () => {
    return (
        <div className="About">
            <Navbar />
            <BackdropSlider />
            <div className="About-page-content">
                <h1>About</h1>
                <p>To add later...</p>
            </div>
        </div>
    );
};

export default Aboutpage;
