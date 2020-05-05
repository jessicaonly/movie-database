const fetch = require('node-fetch');

const { 
  port, 
  apiKey, 
  endpoint
 } = require('../../config') || 5000;

module.exports = (app) => {
  app.get('/get-popular-movies', (req, res) => {
    fetch(`${endpoint}/popular?api_key=${apiKey}&page=1`)
      .then(res =>
        res.json())
      .then(movies => {
        res.send({ movies })
      }
      )
      .catch(err => {
        res.redirect('/error');
      })
  });
}
