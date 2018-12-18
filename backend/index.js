const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const env = process.env.NODE_ENV || 'dev';
const port = process.env.PORT;

var API_PORT;

if(!port) { //If the port is not defined in env
    API_PORT = (env == 'dev') ? 3001 : 80;
} else {
    API_PORT = port;
}

const app = express();
//const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use( express.static(`${__dirname}/../client/build` ) );

const apiRouter = require('./api/index.js');
app.use("/api", apiRouter);

//app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));