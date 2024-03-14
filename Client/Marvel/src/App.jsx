// App.js
import React from 'react';
import './App.css'; // Assuming you're using Create React App, this imports some basic styling.
import MarvelMoviesList from './component/landing'; // Adjust the path according to your file structure
import AddReview from './component/AddReview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewList from './component/ReviewList'; // Adjust the path as necessary

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MarvelMoviesList/>} />
      <Route path="/reviews" element={<ReviewList />} />
      <Route path="Addreview" element={<AddReview/>} />
      <Route path="MovieList" element={<MarvelMoviesList/>} />
    </Routes>
    </BrowserRouter>
  );
}


export default App;

