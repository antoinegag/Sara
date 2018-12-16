# Sara

Smart Assistant and Room Automation

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To install Sara you will need
* Git
* NodeJS
* NPM or Yarn

### Installing

First clone the project or your fork with

`git clone <git_url>`

After that all you need to do is run

`npm run setupDev`

This will install dependency for the client and backend.

To run the app, go in the root directory and run

`npm start`

Your default browser should open on the app

## Deployment

### Prerequisites
To deploy this app on a GNU/Linux server, you will need

* Git
* NodeJS
* NPM or Yarn
* PM2

If you want the app to run on Port 80, make sure that Node has access
```bash
sudo apt-get install libcap2-bin
sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\
```
You can set the port you wish to usein [ecosystem.config.js](ecosystem.config.js) under `env_production`

### Install
Run

`npm run deploy`

This will
* Install backend dep.
* Install client dep.
* Build the client
* Launch a PM2 process

### Updating
Run

`npm run upgrade`

This will
* Pull code from upstream
* Install backend dep.
* Install client dep.
* Build the client
* Restart the PM2 process

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Poke1650/Sara/tags). 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details