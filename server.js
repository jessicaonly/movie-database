const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { port, apiKey, endpoint} = require('./config') || 5000;

require('./routes')(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => console.log(`🚀 Listening on port ${port}!`));