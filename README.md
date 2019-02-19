#  Sara &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![](doc/assets/icon-96.png)

**S**mart **A**ssistant and **R**oom **A**utomation

## What is Sara?
Sara is a lightweight, open-source and configurable control and monitoring system for your room.

At the moment it has a few features such as
* Light control
* Temperature monitoring
* Light level monitoring

My plan is to make Sara easily usable for a variety of connect things like the Google or Amazon assistant lineup.

## [Demo video (Click me!)](https://streamable.com/bs8f8)

## Screenshots

<img src="doc/assets/dashboard-m.jpg" width="30%"> <img src="doc/assets/home-m-1.png" width="30%"> <img src="doc/assets/remote-m.png" width="30%">

# Table of content
- [Technologies](#technologies)
- [Using Sara](#using-sara)
- [License](#license)

# Technologies
This project uses multiple technologies centered around the web.

## JavaScript
The technology stack mostly uses JavaScript (ES6) both on the client and the server.

This allows for fast developement because of the nature of Javascript but also makes it easier to work on the whole stack at the time, no need to switch between languages for front end and back end.

## React
The client app is built using [ReactJS](https://reactjs.org/), an [open-source](https://github.com/facebook/react/) library built by Facebook and the community.

The project was also bootstraped with [create-react-app](https://github.com/facebook/create-react-app) which lets you quickly, well, create a React application.

## NodeJS
The backend which provides the API, serves the React app and interact with other systems like the database and arduino is built on NodeJS.

Amongst the several library used, I used
- [Express](https://expressjs.com/) an open-source web framework
- [db-migrate](https://github.com/db-migrate/node-db-migrate) to manage migrations
- [DiscordJS](https://discord.js.org/#/) to interact with the Discord API

## PostgreSQL
I used [PostgreSQL](https://www.postgresql.org/) a powerful, open-source SQL Server for my database, paired with [node-postgres](https://node-postgres.com/) and [pg-promise](https://github.com/vitaly-t/pg-promise) to communicate with it from the backend.

## Arduino
I used an [Arduino](https://www.arduino.cc/) board and the arduino language (which is basically C++) to connect my sensors and lights to my "server"

## RaspberryPi
The whole project runs on a single [Raspberry Pi](https://www.raspberrypi.org/) running Raspbian Stretch, a minimal version of the Rasbian distro.

To see a complete list of all technologies used in this project

- [Server dependencies](backend/package.json)
- [Client dependencies](client/package.json)


# Using Sara
## Warning
This is still in **beta**, this README (and all other READMEs) are bound to change and might be outdated

## Development
For instructions on how to setup Sara, see the [development](doc/development.md) document

## Deployment
For instructions on how to deploy Sara, see the [deployment](doc/deployment.md) document

## Updating
For instructions on how to update Sara, see the [updating](doc/updating.md) document

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
