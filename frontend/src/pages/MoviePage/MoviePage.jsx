import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import Navbar from "../../Components/Navbar";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./MoviePage.css"

const MoviePage = () => {
    return (
        <>
        <Navbar/>
        <div className="Movie-details-container">
        <MovieDetails/>
        </div>
        </>
    )
};

export default MoviePage;