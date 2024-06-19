import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Navbar";
import YourPicks from "../../Components/YourPicks/YourPicks";
import Loading from "../../Components/LoadingWidget/Loading";

const YourPickPage = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch('/recommendations/1'); // CHANGE HERE
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Handle error by stopping the loading state
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            {loading ? (
                <Loading />
            ) : (
                <YourPicks data={data} /> // Pass the fetched data to YourPicks component
            )}
        </>
    );
};

export default YourPickPage;
