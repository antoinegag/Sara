const SerialPort = require('serialport');
const Delimiter = require('@serialport/parser-delimiter');
const logger = require('../logger');

const address = process.env.ARDUINO_PORT || '/dev/ttyUSB0';

let port = new SerialPort(address);

let parser = port.pipe(new Delimiter({delimiter: '\r\n'}));
let ready = false;
let waitingForData = false;

/**
 * Queue of requests
 * Example object
 * {
 *  command: <char>,          //Command to send to the arduino
 *  waitForInput: <boolean>,  //If should wait for input
 *  dataResolve: <function>   //Function called to resolve the promise
 * }
 *
 * @see sendCommand
 */
const queue = [];

parserHandler();

/**
 * Handle data input from Arduino
 */
function parserHandler() {
  parser.on('data', (data) => {
    const string = data.toString();
    if (ready) {
      if (waitingForData) {
        const entry = queue[0];
        entry.resolve(string);
        waitingForData = false;
        queue.shift();
        processNext();
      } else {
        logger.warn(`Got unexpected data`, `Data: ${string}`);
      }
    } else {
      if (string == 'READY') {
        ready = true;
        logger.info('Arduino ready', `Port: ${address}`);
        processNext();
      } else {
        logger.warn('Received data but Arduino was not ready', `Data: ${string}`);
      }
    }
  });

  /**
 * Handle serial port related errors
 */
  port.on('error', (err) => {
    logger.error('Serial port error', err);
  });

  port.on('close', (data) => {
    ready = false;
    logger.info(`Disconnected from serial port`, `Port: ${address}`);
  });

  port.on('open', (data) => {
    logger.info(`Opened serial port`, `Port: ${address}`);
  });
};


/**
 * Process the next command in queue
 */
function processNext() {
  if (!ready || waitingForData || queue.length == 0) return;

  const entry = queue[0];

  if (entry.waitForInput) {
    waitingForData = true;
    port.write(entry.command);
  } else {
    port.write(entry.command);
    queue.shift(); // Remove processed entry
    entry.resolve();
    processNext();
  }
}

/**
 * Connect to the arduino
 */
function connect() {
  if (ready) {
    console.error(`Attempt to connect to arduino but already connected, call reconnect to reset the connection`);
    return;
  }
  ready = false;
  waitingForData = false;
  port = new SerialPort(address);
  parser.removeAllListeners();
  parser = port.pipe(new Delimiter({delimiter: '\r\n'}));
  parserHandler();
}

/**
 * Close the serial port
 */
function disconnect() {
  port.close();
  ready = false;
}

/**
 * Disconnect and connect to the port
 */
function reset() {
  disconnect();
  connect();
}

module.exports = {
  /**
   * Send a command to the arduino
   * @param {string} command The command to send to the Arduino
   * @param {boolean} [waitForInput=false]
   * @return {Promise}
   */
  sendCommand: (command, waitForInput = false) => {
    let dataResolve = (data) => {
      return data;
    };

    const promise = new Promise((resolve, reject) => {
      dataResolve = resolve;
    });

    queue.push({
      command: command,
      waitForInput: waitForInput,
      resolve: dataResolve,
    });

    processNext();
    return promise;
  },

  isReady: () => {
    return ready;
  },
  port: port,
  reset: reset,
  disconnect: disconnect,
  connect: connect,
};
