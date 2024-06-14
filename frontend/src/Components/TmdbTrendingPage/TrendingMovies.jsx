import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TrendingMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/tmdb-trending")
          .then(res => res.json())
          .then(data => {
            setTrendingMovies(data);
            console.log(data);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }, []);

      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        beforeChange: (current, next) => {
          if (trendingMovies[next]) {
            setBackgroundImage(trendingMovies[next].backdrop_url);  // Update the background image
          }
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="home">
            <Slider {...settings}>
                {trendingMovies.map((movie, index) => (
                    <div key={index}>
                        <h3>{movie.title}</h3>
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TrendingMovies;
