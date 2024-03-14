import React, { useEffect, useState } from 'react';
import './ReviewList.css'; // Adjust the path as necessary to correctly import the CSS file

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div className="reviews-container">
      <h2>Movie Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review._id}>
            <h3>{review.movieTitle}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
