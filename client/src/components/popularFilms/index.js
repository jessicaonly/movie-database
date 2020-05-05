import React from 'react';
import './popularFilms.css';

class PopularFilms extends React.Component {
  
  componentDidMount() {
    fetch('/get-popular-movies')
      .then(res =>
        res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="popular-films">

      </div>
    );
  }
}

export default PopularFilms;
