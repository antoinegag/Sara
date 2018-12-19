var SerialPort = require('serialport');

var address = process.env.ARDUINO_PORT || '/dev/ttyUSB0';
var port = new SerialPort(address)
console.info(`Arduino port set to ${address}`);

var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read ASCII lines
port.pipe(parser); // pipe the serial stream to the parser

var ready = false;
var waitingForData = false;

/**
 * Queue of requests
 * Example object
 * {
 *  command: <char>, //Command to send to the arduino
 *  waitForInput: <boolean>, //If should wait for input before calling the callback
 *  callback: <function> //Function called after the command is sent,
 *                       //if waitForInput is set to true, the callback will contain
 *                       //the response of the arduino
 * }
 * 
 * @see addToQueue
 */
var queue = []

/**
 * Handle data input from Arduino
 */
port.on('data', (data) => {

  let string = data.toString();

  if (ready) {
    if (waitingForData) {

      //Grab the first entry from the queue, call the callback and remove it
      let entry = queue[0];
      if (entry.callback && typeof entry.callback == "function") {
        entry.callback(string);
      }

      queue.shift(); //Remove processed entry
      waitingForData = false;
      processNext();

    } else {
      console.warn(`Got unexpected data from Arduino: ${string}`);
    }
  } else {
    if (string === 'READY') {
      ready = true;
      console.info(`Arduino @ ${address} ready`);
      processNext();
    }
  }
});

/**
 * Process the next command in queue
 * Unless:
 *  -We are waiting for input from the Arduino
 *  -Connection with the Arduino hasn't been made yet
 *  -There are no entry to process 
 */
function processNext() {
  if (waitingForData || !ready || queue.length == 0) return;

  let entry = queue[0];
  port.write(entry.command);

  if (!entry.waitForInput) {
    if (entry.callback && typeof entry.callback == "function") {
      entry.callback();
    }
    queue.shift(); //Remove processed entry
  } else {
    waitingForData = true;
  }
}

/**
 * Handle serial port related errors
 */
port.on('error', (err) => {
  console.error('Serial port error');
  console.error(`Error: ${err}`);
  process.exit(1);
});

module.exports = {
  /**
   * Send a command to the arduino
   * @param {string} command The command to send to the Arduino
   * @param {boolean} [waitForInput=true] Indicate if we should wait for input from the Arduino after running the command
   * @param {function} [callback] Function called after the method is sent to the Arduino, if waitForInput is set to true the data will be the first parameters in the callback 
   */
  sendCommand: (command, waitForInput = false, callback) => {
    queue.push({
      command: command,
      waitForInput: waitForInput,
      callback: callback
    });
    processNext();
  },

  isOpen: () => { return port.isOpen }
}