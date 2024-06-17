import React, { useState, useEffect } from 'react';
import './TopMovies.css'; // Import your CSS file for styling

const TopMovies = () => {
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/landing-page")
          .then(res => res.json())
          .then(data => {
            setTopMovies(data.slice(0, 12)); // Get top 12 movies
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    }, []);

    return (
        <div className="movies-container">
            {topMovies.map((movie, index) => (
                <a key={index} href={`/movie_page/${movie.id}`} className={`movie-tile ${index + 1}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <p >{movie.overview}</p>
                        <br></br>
                        <p className='vote-average'>{movie.vote_average}</p>
                        <div className="movie-number">Movie Heroes users ranked {movie.title} the number <span className="rank">{index + 1}</span> film of all time.</div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default TopMovies;
