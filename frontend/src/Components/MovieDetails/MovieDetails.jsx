import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Ratings.css";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState(null);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const totalStars = 5;

    // Fetch movie details on mount or when id changes
    useEffect(() => {
        fetch(`http://localhost:5001/movie_page/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMovie(data);
            })
            .catch(error => setError(error.toString()));
    }, [id]);

    // Fetch user ID from local storage
    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);

    // POST request to some endpoint when rating changes
    useEffect(() => {
        if (rating !== null && userId !== null && id !== null) {
            fetch(`http://localhost:5001/movie_page/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: userId, movieId: id, rating: rating }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('POST DATA:', data);
            })
            .catch(error => setError(error.toString()));
        }
    }, [rating, userId, id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div id={movie.id}>
            <div className="Image">
                <img className="logo" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <h1>{movie.title}</h1>
            <h3>Overview:</h3>
            <div>
                {[...Array(totalStars)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onChange={() => setRating(currentRating)}
                                style={{ display: "none" }}
                            />
                            <span
                                className="star"
                                style={{
                                    color: currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                                    cursor: "pointer",
                                    fontSize: "24px"
                                }}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                                onClick={() => setRating(currentRating)}
                            >
                                &#9733;
                            </span>
                        </label>
                    );
                })}
            </div>
            <h1>{movie.id}</h1>
            <p>{movie.overview}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <ul>
                {movie.similar.map((similarMovie, index) => (
                    <li key={index}>
                        <p>{similarMovie.title}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`} alt={similarMovie.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieDetails;