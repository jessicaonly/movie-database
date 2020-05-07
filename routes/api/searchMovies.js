const fetch = require('node-fetch');

const { 
  port, 
  apiKey, 
  searchEndpoint
 } = require('../../config') || 5000;

const searchMovies = (app) => {
  app.get('/search-movies', (req, res) => {
    const search = req.query.query;
    fetch(`${searchEndpoint}?api_key=${apiKey}&query=${search}&page=1`)
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

module.exports = searchMovies;

