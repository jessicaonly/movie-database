import React from 'react';
import './popularFilms.css';

import { imageEndpoint, posterSize } from '../../config';

class PopularFilms extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    fetch('/get-popular-movies')
      .then(res =>
        res.json())
      .then(data => {
        let results = data.movies.results;
        console.log(data.movies.results)
        this.setState({ movies: results });
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    console.log(this.state.movies)
    return (
      <div className="popular-films">
        {this.state.movies && this.state.movies.map(movie => {
          return (
          <div className='movie'> 
          <img 
            className='movie-image' 
            src={`${imageEndpoint}${posterSize}${movie.poster_path}`}
          />
          <div className='movie-name'>
            {movie.title}
          </div>
          </div>
          )
        })}
      </div>
    );
  }
}

export default PopularFilms;
