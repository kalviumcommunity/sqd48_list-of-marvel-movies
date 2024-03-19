import React, { useEffect, useState } from 'react';
import './ReviewList.css'; 

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [editReviewId, setEditReviewId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    movieTitle: "",
    rating: "",
    review: "",
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    fetch('http://localhost:3000/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/reviews/${id}`, { method: 'DELETE' })
      .then(() => {
        fetchReviews(); 
      })
      .catch(error => console.error('Error deleting review:', error));
  };

  const handleEdit = (review) => {
    setEditReviewId(review._id);
    setEditFormData({
      movieTitle: review.movieTitle,
      rating: review.rating,
      review: review.review,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedReview = {
      movieTitle: editFormData.movieTitle,
      rating: editFormData.rating,
      review: editFormData.review,
    };

    fetch(`http://localhost:3000/reviews/${editReviewId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedReview),
    })
    .then(() => {
      setEditReviewId(null);
      fetchReviews(); 
    })
    .catch(error => console.error('Error updating review:', error));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  return (
    <div className="reviews-container">
      <h2>Movie Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            {editReviewId === review._id ? (
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  required="required"
                  placeholder="Enter a movie title"
                  name="movieTitle"
                  value={editFormData.movieTitle}
                  onChange={handleFormChange}
                />
                <input
                  type="text"
                  required="required"
                  placeholder="Enter a rating"
                  name="rating"
                  value={editFormData.rating}
                  onChange={handleFormChange}
                />
                <textarea
                  required="required"
                  name="review"
                  value={editFormData.review}
                  onChange={handleFormChange}
                ></textarea>
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditReviewId(null)}>Cancel</button>
              </form>
            ) : (
              <>
                <h3>{review.movieTitle}</h3>
                <p>Rating: {review.rating}</p>
                <p>{review.review}</p>
                <button onClick={() => handleEdit(review)}>Edit</button>
                <button onClick={() => handleDelete(review._id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
