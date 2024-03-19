// AddReview.jsx
import React, { useState } from 'react';
import './AddReview.css'; // Adjust the path as necessary to correctly import the CSS file
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ movieTitle, review, rating: parseInt(rating, 10) }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        navigate('/reviews');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Movie Title:
                <input type="text" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
            </label>
            <label>
                Review:
                <textarea value={review} onChange={(e) => setReview(e.target.value)} />
                {/* <input type="text" value={review} onChange={(e) => setReview(e.target.value)} /> */}
            </label>
            <label>
                Rating:
                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
            </label>
            <button type="submit">Add Review</button>
        </form>
    );
};

export default AddReview;
