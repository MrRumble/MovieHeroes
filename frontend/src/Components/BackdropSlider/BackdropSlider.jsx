import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './BackdropSlider.css';

const BackdropSlider = () => {
    const [backdrops, setBackdrops] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/tmdb-trending")
          .then(res => res.json())
          .then(data => {
            if (data.length > 0) {
                setBackdrops(data.map(movie => movie.backdrop_url));
            }
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    }, []);

    const settings = {
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        speed: 1000,
    };

    return (
        <div className="backdrop-slider">
            <Slider {...settings}>
                {backdrops.map((url, index) => (
                    <div key={index} className="slider-item">
                        <img src={url} alt={`Backdrop ${index}`} className="backdrop-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BackdropSlider;
