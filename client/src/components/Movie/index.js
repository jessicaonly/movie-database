import React from 'react';
import './Movie.css';

import { imageEndpoint, posterSizeFocus } from '../../config';

class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  formatMoney = (amount) => {
      return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render() {
    const { movieInfo, getMoviesByGenre, getSimilarMovies, clearMovie } = this.props;
    return (
      <section className='movie-details'>
        <div 
          className="return button"
          onClick={clearMovie}
        > 
          Return to Results 
        </div>
        <div className='movie-title'>{movieInfo.title}</div>
        <div className='movie-poster'>
        <img
          className='movie-image-big'
          src={`${imageEndpoint}${posterSizeFocus}${movieInfo.poster_path}`}
          alt='movie-poster'
        />
        </div>
        <strong className='movie-release-date'>Release Date: {movieInfo.release_date}</strong>
        <strong className='movie-budget'>Budget: ${this.formatMoney(movieInfo.budget)}</strong>
        <strong className='movie-revenue'>Box Office: ${this.formatMoney(movieInfo.revenue)}</strong>
        <div className='movie-description'>{movieInfo.overview}</div>
        <strong className='movie-genres'>Genres: {movieInfo.genres.map(genre => {
          return (
            <div className='genre' key={genre.id}
             onClick={() => getMoviesByGenre(genre.id)}>
               {genre.name}
            </div>
          )
        })}
        </strong>
        <div className='get-similar-movies button' 
          onClick={() => getSimilarMovies(movieInfo.id)}
        >
          Get Similar Movies
        </div>
      </section>
    );
  }

}

export default Movie;