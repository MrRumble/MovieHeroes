import React, { useState } from "react";

const MovieDetails = (props) => {
    return (
        <div id="movie._id">
        <div className="Image">
            <img className="logo" src= {movie.backdrop}/>
            <img className="logo" src= {movie.poster_path} />
        </div>
        <h1> {props.movie.title} </h1>
        <h1> {props.movie.overview} </h1>
        <p> {props.movie.release_date} </p>
        <p> {props.movie.genre} </p>
        </div>
    );
};
export default MovieDetails;