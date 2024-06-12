import { useState, useEffect } from 'react';

const AllMovies = () => {
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/")
          .then(res => res.json())  // Use .text() to handle plain text response
          .then(data => {
            setAllMovies(data);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }, []);

    return (
        <div className="home">
            {/* <p>{allMovies}</p> */}

            <ul>
                {allMovies.map((movie, index) => (
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

export default AllMovies