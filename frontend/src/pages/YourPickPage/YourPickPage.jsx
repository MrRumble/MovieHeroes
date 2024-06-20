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
        };

        fetchData();

        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000); // Show loading for at least 2 seconds

        return () => clearTimeout(timer);
    }, [user_id]);

    return (
        <div className='yourpicks-page'>
            <Navbar />
            {loading ? (
                <Loading />
            ) : (
                <YourPicks data={data} />
            )}
        </div>
    );
};

export default YourPickPage;
