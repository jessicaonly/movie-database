# Movie Database 🎬

A searchable database for movies!

## Getting Started 👩‍💻
1. Run `npm install` in root directory in your terminal to install node dependencies.
2. Run `npm install` in `/client` directory to install clientside dependencies.
3. Make sure you have an `.env` file in your root directory with the API key and URLS (provided upon request!)
4. Run `node server.js` in the root directory to get the Node server running.
5. Open another tab/window in your terminal, navigate into the `/client` directory again, and run `npm start`
6. Naviage to `localhost:3000` in your browser if you're not redirected automatically.

That's it!

This (mostly) responsive app has the functionality to:
- view popular movies
- search movies
- view movies in a specific genre
- view movie details
- view movies similar to one that you've selected

## TODO:
- Fallback images for movies that don't have a poster
- Move frontend API logic into a `/utils` folder or something
- Handle budget for Netflix movies
- Tests!
