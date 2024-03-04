import React from 'react';

const MarvelMoviesList = () => {
    const movies = [
        { id: 1, title: 'Iron Man', releaseYear: 2008 },
        { id: 2, title: 'The Incredible Hulk', releaseYear: 2008 },
        { id: 3, title: 'Iron Man 2', releaseYear: 2010 },
        // Add more movies as needed
    ];

    return (
        <div>
            <h2>Marvel Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title} ({movie.releaseYear})</li>
                ))}
            </ul>
        </div>
    );
};

export default MarvelMoviesList;
