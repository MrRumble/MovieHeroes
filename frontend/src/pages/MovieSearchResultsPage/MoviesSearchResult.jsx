import React from "react";
import Navbar from "../../Components/Navbar";
import MovieSearchPage from '../../Components/MovieSearchPage/MovieSearchPage'
import "./MoviesSearchResult.css"; 

const MoviesSearchResult = () => {
    return (
        <div className="movie-search-page">
            <Navbar />
            <MovieSearchPage />
        </div>
    );
};
export default MoviesSearchResult;