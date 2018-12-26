require('dotenv').config({path: __dirname + '/.env'});

const serial = require('./arduino/serial'); // Load the serial module
const db = require('./pg'); // Etablish database connection
const discord = require('./discord/bot');

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const env = process.env.NODE_ENV || 'dev';
const port = process.env.PORT;

let API_PORT;

if (!port) { // If the port is not defined in env
  API_PORT = (env == 'dev') ? 3001 : 80;
} else {
  API_PORT = port;
}

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

const apiRouter = require('./api/index.js');
app.use('/api', apiRouter);

// Point everything else to React, this allows us to use react routers
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

app.listen(
    API_PORT,
    () => console.log(`Listening for HTTP request on port ${API_PORT}`)
);
