import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TrendingMovies.css';

const TrendingMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        fetch("http://localhost:5001/tmdb-trending")
          .then(res => res.json())
          .then(data => {
            setTrendingMovies(data);
            if (data.length > 0) {
                setBackgroundImage(data[0].backdrop_url);
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
            if (trendingMovies[next]) {
                setBackgroundImage(trendingMovies[next].backdrop_url);
            }
        },
    };

    return (
        <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Slider {...settings}>
                {trendingMovies.map((movie, index) => (
                    <div key={index} className="slider-item">
                
                        <img src={movie.poster_url} alt={movie.title} className="poster-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TrendingMovies;
