# Deployment

## Prerequisites
To deploy this app on a GNU/Linux server, you will need

* Git
* NodeJS
* NPM or Yarn
* PM2
* PostgreSQL

If you want the app to run on Port 80, make sure that Node has access
```bash
sudo apt-get install libcap2-bin
sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\
```
You can set the port you wish to usein [ecosystem.config.js](ecosystem.config.js) under `env_production`

## Arduino
To use the arduino, make sure to add your production user to the tty group so you can use the port

`sudo usermod -a -G tty <user>`

or

`sudo usermod -a -G dialout <user>` on Debian (require restart)

## Install
Clone the project

`git clone https://github.com/Poke1650/Sara`

This will create a directory called "Sara" with all the code in it.

Create a file named `.env` in the `backend/` directory with the content:

```env
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=


ARDUINO_PORT= //OPTIONAL (default: /dev/ttyUSB0)
```

And fill in the blanks to fit your setup

Go into the Sara directory: `cd Sara`

Run `npm run server`, you will see that a "config.json" file will have been created in the backend directory, open it and fill the values.

Run

`npm run deploy`

This will
* Install backend dep.
* Install client dep.
* Build the client
* Launch a PM2 process
