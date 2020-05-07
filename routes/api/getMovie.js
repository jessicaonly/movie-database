const fetch = require('node-fetch');

const {
  port,
  apiKey,
  endpoint
} = require('../../config') || 5000;

const getMovie = (app) => {
  app.get('/get-movie', (req, res) => {
    const movie = req.query.query;
    fetch(`${endpoint}/${movie}?api_key=${apiKey}`)
      .then(res =>
        res.json())
      .then(movieInfo => {
        res.send({ movieInfo })
      }
      )
      .catch(err => {
        res.redirect('/error');
      });
  });
}

module.exports = getMovie;
