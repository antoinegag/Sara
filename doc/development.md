# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

To install Sara you will need
* Git
* NodeJS
* NPM or Yarn
* PostgreSQL

## Installing

First clone the project

`git clone https://github.com/Poke1650/Sara`


Create a .env file in the backend/ directory with the content
```env
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=

ARDUINO_PORT= //OPTIONAL (default: /dev/ttyUSB0)
```
Fill the blank to fit your needs

After that all you need to do is run

`npm run setupDev`

This will install dependency for the client and backend.

Run `npm run server`, you will see that a "config.json" file will have been created in the backend directory, open it and fill the values.

To run the app, you can run `npm start` which will start the client *and* the server at the same time.

Or you can go run `npm run client` and `npm run server` in two different consoles.

Your default browser should open on the app

## Arduino
To use the arduino, make sure to add your user to the tty group so you can use the port

`sudo usermod -a -G tty <user>`

or

`sudo usermod -a -G dialout <user>` on Debian (require restart)