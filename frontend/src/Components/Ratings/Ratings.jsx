import "./Ratings.css";
import React, { useState } from "react";

const Ratings = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);

  const handleChange = (event) => {
    setTotalStars(Number(event.target.value));
  };

  return (
    <div>
      <div className="star-rating">
        {[...Array(totalStars)].map((star, index) => {
          const currentRating = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onChange={() => setRating(currentRating)}
                style={{ display: "none" }}
              />
              <span
                className="star"
                style={{
                  color: currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                  cursor: "pointer",
                  fontSize: "2rem",
                }}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              >
                &#9733;
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Ratings;