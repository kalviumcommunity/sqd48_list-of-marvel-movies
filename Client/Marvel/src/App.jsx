// App.js
import React from 'react';
import './App.css'; // Assuming you're using Create React App, this imports some basic styling.
import MarvelMoviesList from './component/landing'; // Adjust the path according to your file structure

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MarvelMoviesList />
      </header>
    </div>
  );
}

export default App;
