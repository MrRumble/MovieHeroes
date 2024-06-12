import { useState, useEffect } from 'react';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState("");

    useEffect(() => {
        fetch("http://localhost:5001/")
          .then(res => res.text())  // Use .text() to handle plain text response
          .then(data => {
            setMovieDetails(data);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }, []);

     return (
        <div>
            <h2>{movieDetails}</h2>
        </div>
     ); 
}

export default MovieDetails
