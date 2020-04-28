import React from 'react';

import PopularFilms from './components/popularFilms';
import Searchbar from './components/searchBar';

import './App.css';

function App() {
  return (
    <div className="movie-database">
      <h1 className='page-title'> ✨ Movie Search ✨ </h1>
      <Searchbar />
      <PopularFilms />
    </div>
  );
}

export default App;
