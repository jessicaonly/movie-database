const fetch = require('node-fetch');

const {
  port,
  apiKey,
  endpoint
} = require('../../config') || 5000;

const getSimilarMovies = (app) => {
  app.get('/get-similar-movies', (req, res) => {
    const id = req.query.query;
    fetch(`${endpoint}/${id}/similar?api_key=${apiKey}&page=1`)
      .then(res =>
        res.json())
      .then(movies => {
        res.send({ movies })
      }
      )
      .catch(err => {
        res.redirect('/error');
      });
  });
}

module.exports = getSimilarMovies