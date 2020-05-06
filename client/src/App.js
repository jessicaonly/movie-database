import React from 'react';

import Movies from './components/Movies';
import Searchbar from './components/SearchBar';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('/get-popular-movies')
      .then(res =>
        res.json())
      .then(data => {
        let results = data.movies.results;
        this.setState({ movies: results });
      })
      .catch(err => {
        console.log(err);
      })
  }

  searchMovies = (movie) => {
    console.log('in searchMovies')
    fetch('/search-movies?' + new URLSearchParams({
      query: movie
    }))
      .then(res =>
        res.json())
      .then(data => {
        let results = data.movies.results;
        this.setState({ movies: results });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="movie-database">
        <h1 className='page-title'> ✨ Movie Search ✨ </h1>
        <Searchbar searchMovies={this.searchMovies} />
        <Movies movies={movies} />
      </div>
    );
  }
}

export default App;
