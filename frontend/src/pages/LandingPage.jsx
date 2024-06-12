import { useState, useEffect } from 'react';


const LandingPage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch("http://localhost:5001/")
          .then(res => res.text())  // Use .text() to handle plain text response
          .then(data => {
            setMessage(data);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }, []);

    return (
        <div className="home">
            <h1>{message}</h1>
        </div>
    );
};

export default LandingPage