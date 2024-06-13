import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
    const { id } = useParams();
    console.log(id);
    const [movie, setMovie] = useState("");
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
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <h1>{movie.title}</h1>
        <h2>{movie.overview}</h2>
    </div>
    )
};

export default MoviePage;