import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Navbar";
import YourPicks from "../../Components/YourPicks/YourPicks";
import Loading from "../../Components/LoadingWidget/Loading";
import "./YourPickPage.css";

const YourPickPage = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const user_id = localStorage.getItem("user_id");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5001/recommendations/${user_id}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false); // Always set loading to false after fetching data
        };

        fetchData();
    }, [user_id]);

    return (
        <div className='yourpicks-page'>
            <Navbar />
            <div className="page-content">
                <div className="recommendation-title">
                    <h2>Explore our top recommendations, personalized just for you!</h2>
                </div>
                {loading ? (
                    <Loading />
                ) : (
                    <YourPicks data={data} />
                )}
            </div>
        </div>
    );
};

export default YourPickPage;
