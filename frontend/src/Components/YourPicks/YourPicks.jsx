import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./YourPicks.css";

const YourPicks = ({ data }) => {
    const [userMoviePicks, setUserMoviePicks] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('');
    const [centerMovie, setCenterMovie] = useState(null);

    useEffect(() => {
        if (data) {
            setUserMoviePicks(data);
            console.log("Data:", data);
            if (data.length > 0) {
                setBackgroundImage(data[0].backdrop_path);
                setCenterMovie(data[0]);
            }
        }
    }, [data]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '0px',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        beforeChange: (current, next) => {
            if (userMoviePicks[next]) {
                setBackgroundImage(userMoviePicks[next].backdrop_path);
                setCenterMovie(userMoviePicks[next]);
            }
        },
    };

    return (
        <div className="your-picks-home" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${backgroundImage})` }}>
            {centerMovie && (
                <div className="center-movie-info">
                    <h3 className="movie-title">{centerMovie.title}</h3>
                    <p className="movie-overview">{centerMovie.overview}</p>
                    <p className="movie-rating">Rating: {centerMovie.vote_average}</p>
                </div>
            )}
            <Slider {...settings}>
                {userMoviePicks.map((movie, index) => (
                    <div key={index} className="slider-item">
                        <a key={index} href={`/movie_page/${movie.id}`} className={`movie-tile1 ${index + 1}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="poster-image" />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default YourPicks;
