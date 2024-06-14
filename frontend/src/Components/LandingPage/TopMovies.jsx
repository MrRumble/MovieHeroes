import { useState, useEffect } from 'react';

const TopMovies = () => {
    const [TopMovies, setTopMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/landing-page")
          .then(res => res.json())  // Use .text() to handle plain text response
          .then(data => {
            setTopMovies(data);
            console.log(data)
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }, []);

    return (
        <div className="">

            {/* <p>{allMovies}</p> */}

            <ul>
                {TopMovies.map((movie, index) => (
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

export default TopMovies
