const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  endpoint: process.env.API_URL,
  searchEndpoint: process.env.API_SEARCH_URL,
  apiKey: process.env.API_KEY,
  port: process.env.PORT,
};