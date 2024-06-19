import { useState, useEffect } from 'react';

const YourPicks = () => {
    const [userMoviePicks, setUserMoviePicks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/recommendations/1")
            .then(res => res.json())
            .then(data => {
            setUserMoviePicks(data);
            console.log("data", data);
        })
            .catch(error => {
            console.error("Error fetching data:", error);
        });
    }, []);
    

    return (
        <>
            <div className="movies-container">
                {userMoviePicks.map((movie, index) => (
                    <a key={index} href={`/movie_page/${movie.id}`} className={`movie-tile ${index + 1}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <p >{movie.overview}</p>
                            <br></br>
                            <p className='vote-average'>{movie.vote_average}</p>
                            
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
};

export default YourPicks;
