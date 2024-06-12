import { useState, useEffect } from 'react';

const TrendingMovies = () => {
    const [TrendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/tmdb-trending")
          .then(res => res.json())  // Use .text() to handle plain text response
          .then(data => {
            setTrendingMovies(data);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }, []);

    return (
        <div className="home">
            {/* <p>{allMovies}</p> */}

            <ul>
                {TrendingMovies.map((movie, index) => (
                    <li key={index}>{movie.title} 
                    <img src={movie.poster_url }></img>
                    {/* <a href= $"{}" > 
                    </a> */}
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default TrendingMovies