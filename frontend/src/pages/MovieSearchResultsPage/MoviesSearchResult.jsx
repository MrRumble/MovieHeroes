import React from "react";
import Navbar from "../../Components/Navbar";
import MovieSearch from '../../Components/MovieSearch/MovieSearch'
import "./MoviesSearchResult.css"; 

const MoviesSearchResult = () => {
    return (
        <div className="movie-search-page">
            <Navbar />
            <MovieSearch/>
        </div>
    );
};
export default MoviesSearchResult;