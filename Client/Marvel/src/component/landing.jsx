import React, { useEffect, useState } from 'react';
import './landing.css'; 
import { Link } from 'react-router-dom'; 


const MarvelMoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
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
