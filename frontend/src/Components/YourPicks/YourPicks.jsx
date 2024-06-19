import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./YourPicks.css"

const YourPicks = () => {
    const [userMoviePicks, setUserMoviePicks] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        fetch("http://localhost:5001/recommendations/1")
            .then(res => res.json())
            .then(data => {
                setUserMoviePicks(data);
                console.log("Data:" , data)
            if (data.length > 0) {
                setBackgroundImage(data[0].backdrop_path);
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
            }
        },
    };

    return (
        <div className="home" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${backgroundImage})` }}>
            <Slider {...settings}>
                {userMoviePicks.map((movie, index) => (
                    <div key={index} className="slider-item">
                
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt={movie.title} className="poster-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default YourPicks;
