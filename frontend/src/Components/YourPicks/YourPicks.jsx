import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./YourPicks.css";
import Loading from '../LoadingWidget/Loading';


const YourPicks = () => {
    const [userMoviePicks, setUserMoviePicks] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('');
    const [centerMovie, setCenterMovie] = useState(null);
    const  user_id = localStorage.getItem("user_id")

    useEffect(() => {
        fetch(`http://localhost:5001/recommendations/${user_id}`)
            .then(res => res.json())
            .then(data => {
                setUserMoviePicks(data);
                console.log("Data:", data);
                if (data.length > 0) {
                    setBackgroundImage(data[0].backdrop_path);
                    setCenterMovie(data[0]);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

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
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="poster-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default YourPicks;

