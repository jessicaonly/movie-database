const fetch = require('node-fetch');

const { 
  port, 
  apiKey, 
  discoverEndpoint
 } = require('../../config') || 5000;

const getMoviesByGenre = (app) => {
  app.get('/get-movies-by-genre', (req, res) => {
    const genre = req.query.query;
    console.log(genre);
    let url = `${discoverEndpoint}?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genre}&page=1`;
    console.log(url);
    fetch(`${discoverEndpoint}?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genre}&page=1`)
      .then(res =>
        res.json())
      .then(movies => {
       console.log(movies);
        res.send({ movies })
      }
      )
      .catch(err => {
        res.redirect('/error');
      })
  });
}

module.exports = getMoviesByGenre;
