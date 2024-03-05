// import React from 'react';

// const MarvelMoviesList = () => {
//     const movies = [
//         { id: 1, title: 'Iron Man', releaseYear: 2008 },
//         { id: 2, title: 'The Incredible Hulk', releaseYear: 2008 },
//         { id: 3, title: 'Iron Man 2', releaseYear: 2010 },
//     ];

//     return (
//         <div>
//             <h2>Marvel Movies</h2>
//             <ul>
//                 {movies.map(movie => (
//                     <li key={movie.id}>{movie.title} ({movie.releaseYear})</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default MarvelMoviesList;

import React, { useEffect, useState } from 'react';

const MarvelMoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Replace 'http://localhost:3000/movies' with the actual endpoint of your backend
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []); // The empty array ensures this effect runs only once after the initial render

    return (
        <div>
            <h2>Marvel Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title} ({movie.year})</li> // Ensure the keys and structure match your database
                ))}
            </ul>
        </div>
    );
};

export default MarvelMoviesList;
