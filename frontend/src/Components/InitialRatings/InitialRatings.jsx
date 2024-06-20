import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './InitialRatings.css';

const InitialRatings = () => {
    const [initialRatings, setInitialRatings] = useState([]);
    const [userId, setUserId] = useState(null);
    const [ratings, setRatings] = useState({});
    const [error, setError] = useState(null);
    const totalStars = 5;
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    // Fetch user ID from local storage
    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);

    useEffect(() => {
        fetch("http://localhost:5001/init_ratings")
            .then(res => res.json())
            .then(data => {
                setInitialRatings(data);
                const initialRatingsState = {};
                data.forEach(movie => {
                    initialRatingsState[movie.id] = {
                        rating: null,
                        hover: null
                    };
                });
                setRatings(initialRatingsState);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError(error.toString());
            });
    }, []);

    // POST request to some endpoint when rating changes
    const handleRatingChange = (movieId, currentRating) => {
        fetch("http://localhost:5001/init_ratings", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userId, movieId: movieId, rating: currentRating }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('POST DATA:', data);
            const updatedRatings = {
                ...ratings,
                [movieId]: {
                    ...ratings[movieId],
                    rating: currentRating
                }
            };
            setRatings(updatedRatings);
            sliderRef.current.slickNext();
        })
        .catch(error => {
            console.error("Error submitting rating:", error);
            setError(error.toString());
        });
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        afterChange: (index) => {
            const movieId = initialRatings[index].id;
            const updatedRatings = {
                ...ratings,
                [movieId]: {
                    rating: null,
                    hover: null
                }
            };
            setRatings(updatedRatings);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="home">
            <Slider {...settings} ref={sliderRef}>
                {initialRatings.map((movie, index) => (
                    <div key={index} className="slider-item-slider " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
                        <div className="poster-container">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="poster-image" />
                            <div className="rating-stars">
                                {[...Array(totalStars)].map((_, starIndex) => {
                                    const currentRating = starIndex + 1;
                                    return (
                                        <label key={starIndex}>
                                            <input
                                                type="radio"
                                                name={`rating-${movie.id}`}
                                                value={currentRating}
                                                onChange={() => handleRatingChange(movie.id, currentRating)}
                                                style={{ display: "none" }}
                                            />
                                            <span
                                                className="star"
                                                style={{
                                                    color: currentRating <= (ratings[movie.id]?.hover || ratings[movie.id]?.rating) ? "#ffc107" : "#e4e5e9",
                                                    cursor: "pointer",
                                                    fontSize: "24px"
                                                }}
                                                onMouseEnter={() => {
                                                    const updatedRatings = {
                                                        ...ratings,
                                                        [movie.id]: {
                                                            ...ratings[movie.id],
                                                            hover: currentRating
                                                        }
                                                    };
                                                    setRatings(updatedRatings);
                                                }}
                                                onMouseLeave={() => {
                                                    const updatedRatings = {
                                                        ...ratings,
                                                        [movie.id]: {
                                                            ...ratings[movie.id],
                                                            hover: null
                                                        }
                                                    };
                                                    setRatings(updatedRatings);
                                                }}
                                            >
                                                &#9733;
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <button onClick={() => navigate('/yourpicks')} className="final-button">
                Go to Your Picks
            </button>
        </div>
    );
};

export default InitialRatings;
