import './MovieSearch.css'; // Import your CSS file for styling
import Navbar from '../Navbar';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';

const MovieSearchPage = () =>{
    const [input, setInput] = useState("");
    const [foundMovies, setFoundMovies] = useState([])

    const fullName = localStorage.getItem("full_name");

    const searchedMoviesString = localStorage.getItem("searchedMovies");
    const searchedMovies = JSON.parse(searchedMoviesString) || []; // Parse the string and provide a fallback to an empty array
    
    return (
        <div className='movieSearchResultsPage'>
            <div>
            <Navbar userName={fullName} /> 
            </div>
            <SearchBar input={input} setInput = {setInput} foundMovies={foundMovies} setFoundMovies={setFoundMovies}/>
            <div className="movies-container">
                {searchedMovies.map((movie, index) => (
                    <a key={index} href={`/movie_page/${movie.id}`} className={`movie-tile ${index + 1}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <p >{movie.overview}</p>
                            <br></br>
                            <p className='vote-average'>{movie.vote_average}</p>
                            {/* if we have time, add in the ranking of the films according to the database here */}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};


export default MovieSearchPage;


