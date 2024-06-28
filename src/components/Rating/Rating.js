
import React, { useState } from 'react';
import './Rating.css'; // Import CSS for styling

const Rating = () => {
  const [rating, setRating] = useState(0); // State to hold the current rating

  const handleStarClick = (starValue) => {
    setRating(starValue); // Update rating state when a star is clicked
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={starValue <= rating ? 'star filled' : 'star'}
            onClick={() => handleStarClick(starValue)}
          >
            &#9733; {/* Unicode character for a star */}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
