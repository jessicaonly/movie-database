import React from 'react';

import Movies from './components/Movies';
import Movie from './components/Movie';
import Searchbar from './components/SearchBar';
import Loading from './components/Loading';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movieInfo: '',
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('/get-popular-movies')
      .then(res =>
        res.json())
      .then(data => {
        let results = data.movies.results;
        this.setState({ movies: results, loading: false });
      })
      .catch(err => {
        console.log(err);
      })
  }

  searchMovies = (movie) => {
    this.setState({ loading: true });
    fetch('/search-movies?' + new URLSearchParams({
      query: movie
    }))
      .then(res =>
        res.json())
      .then(data => {
        let results = data.movies.results;
        this.setState({ movies: results, loading: false });
      })
      .catch(err => {
        console.log(err);
      })
  }

  selectMovie = (id) => {
    this.setState({ loading: true });
    fetch('/get-movie?' + new URLSearchParams({
      query: id
    }))
      .then(res =>
        res.json())
      .then(data => {
        let movieInfo = data.movieInfo;
        this.setState({ movieInfo, loading: false });
      })
      .catch(err => {
        console.log(err);
      })
  }

  getMoviesByGenre = (id) => {
    this.clearMovie();
    this.setState({ loading: true });
    fetch('/get-movies-by-genre?' + new URLSearchParams({
      query: id
    }))
      .then(res =>
        res.json())
      .then(data => {
        let results = data.movies.results;
        this.setState({ movies: results, loading: false });
      })
      .catch(err => {
        console.log(err);
      })
  }

  getSimilarMovies = (id) => {
    this.clearMovie();
    this.setState({ loading: true });
    fetch('/get-similar-movies?' + new URLSearchParams({
      query: id
    }))
      .then(res =>
        res.json())
      .then(data => {
        let results = data.movies.results;
        this.setState({ movies: results, loading: false });
      })
      .catch(err => {
        console.log(err);
      })
  }

  clearMovie = () => {
    this.setState({ movieInfo: '' })
  }


  render() {
    const { movies, movieInfo, loading } = this.state;
    return (
      <div className='wrapper'>
        {loading && <Loading />}
        <div className="movie-database">
          <h1 className='page-title'> <span role='img' aria-label='sparkles'>✨</span>
            Movie Search <span role='img' aria-label='sparkles'>✨</span>
          </h1>
          <Searchbar searchMovies={this.searchMovies} />
          {movieInfo === '' &&
            <Movies movies={movies} selectMovie={this.selectMovie} />
          }
          {movieInfo &&
            <Movie
              movieInfo={movieInfo}
              getMoviesByGenre={this.getMoviesByGenre}
              getSimilarMovies={this.getSimilarMovies}
              clearMovie={this.clearMovie}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
