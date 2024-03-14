import React, { useEffect, useState } from 'react';
import './landing.css'; // Adjust the path as necessary to correctly import the CSS file
import { Link } from 'react-router-dom'; // Ensure you've imported Link from react-router-dom


const MarvelMoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Replace 'http://localhost:3000/movies' with the actual endpoint of your backend
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []); 

    return (
        <div>
            <h2>Marvel Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title} ({movie.year})</li> 
                ))}
            </ul>
            <Link to = "/AddReview" className = "add-movie">
                Add Review
            </Link>
        </div>
    );
};

export default MarvelMoviesList;
