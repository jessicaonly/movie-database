import React from 'react';
import './Movies.css';

import { imageEndpoint, posterSize } from '../../config';

class Movies extends React.Component {

  render() {
    const { movies, selectMovie } = this.props;
    return (
      <div className="popular-films">
        {movies.map(movie => {
          return (
            <div className='movie'>
              <img
                className='movie-image'
                src={`${imageEndpoint}${posterSize}${movie.poster_path}`}
                onClick={() => selectMovie(movie.id)}
              />
              <div className='movie-name'>
                {movie.title}
              </div>
              <div className='movie-rating'>
                <span role='img'>⭐️</span>{movie.vote_average} / 10
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Movies;
