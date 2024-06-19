import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Navbar";
import YourPicks from "../../Components/YourPicks/YourPicks";
import Loading from "../../Components/LoadingWidget/Loading";
import "./YourPickPage.css"

const YourPickPage = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5001/recommendations/1`);
                const result = await response.json();
                setData(result);
                console.log("result from main page: ",result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Handle error by stopping the loading state
            }
        };

        fetchData();
    }, []);

    return (
        <div className='yourpicks-page'>
            <Navbar />
            {loading ? (
                <Loading />
            ) : (
                <YourPicks data={data} /> // Pass the fetched data to YourPicks component
            )}
        </div>
    );
};

export default YourPickPage;
