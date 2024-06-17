import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Ratings from '../Ratings/Ratings';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5001/movie_page/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setMovie(data))
            .catch(error => setError(error.toString()));
    }, [id]);
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!movie) {
        return <div>Loading...</div>;
    }
    return (
        <div id={movie.id}>
            <div className="Image">
                <img className="logo" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            </div>
            <h1>{movie.title}</h1>
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
            <Ratings/>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <ul>
                {movie.similar.map((movie, index) => (
                    <li key={index}>
                        <p>{movie.title}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    {/* <a href= $"{}" > 
                    </a> */}
                    </li>
                ))}
            </ul>

        </div>
    );
};
export default MovieDetails;