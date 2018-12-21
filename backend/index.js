require('dotenv').config({ path: __dirname + '/.env' })

const serial = require('./arduino/serial'); //Load the serial module
const db = require('./pg'); //Etablish database connection

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");


const env = process.env.NODE_ENV || 'dev';
const port = process.env.PORT;

let API_PORT;

if (!port) { //If the port is not defined in env
    API_PORT = (env == 'dev') ? 3001 : 80;
} else {
    API_PORT = port;
}

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(express.static(`${__dirname}/../client/build`));
console.info(`Serving react app from ${__dirname}/../client/build`);

const apiRouter = require('./api/index.js');
app.use("/api", apiRouter);

app.listen(API_PORT, () => console.log(`Listening for HTTP request on port ${API_PORT}`));