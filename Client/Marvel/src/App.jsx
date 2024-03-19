// App.js
import React from 'react';
import './App.css';
import MarvelMoviesList from './component/landing'; 
import AddReview from './component/AddReview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewList from './component/ReviewList'; 

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

