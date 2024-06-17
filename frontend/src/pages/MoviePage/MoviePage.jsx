import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import Navbar from "../../Components/Navbar";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Ratings from "../../Components/Ratings/Ratings";


const MoviePage = () => {
    return (
        <>
        <Navbar/>
        <MovieDetails/>
        </>
    )
};

export default MoviePage;