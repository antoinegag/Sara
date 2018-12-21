const SerialPort = require('serialport');

const address = process.env.ARDUINO_PORT || '/dev/ttyUSB0';
const port = new SerialPort(address)
console.info(`Arduino port set to ${address}`);

const Readline = SerialPort.parsers.Readline; // make instance of Readline parser
const parser = new Readline(); // make a new parser to read ASCII lines
port.pipe(parser); // pipe the serial stream to the parser

let ready = false;
let waitingForData = false;

/**
 * Queue of requests
 * Example object
 * {
 *  command: <char>,          //Command to send to the arduino
 *  waitForInput: <boolean>,  //If should wait for input before calling the callback
 *  dataResolve: <function>   //Function called to resolve the promise
 * }
 * 
 * @see sendCommand
 */
let queue = []

/**
 * Handle data input from Arduino
 */
port.on('data', (data) => {

  const string = data.toString();

  if (ready) {
    if (waitingForData) {

      //Grab the first entry from the queue, resolve the promise and remove it
      const entry = queue[0];
      entry.resolve(string);
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

  const entry = queue[0];
  port.write(entry.command);

  if (!entry.waitForInput) {
    entry.resolve();
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
  process.exit(1); //TODO: Properly handle errors
});

module.exports = {
  /**
   * Send a command to the arduino
   * @param {string} command The command to send to the Arduino
   * @param {boolean} [waitForInput=false] Indicate if we should wait for input from the Arduino after running the command
   */
  sendCommand: (command, waitForInput = false) => {
    
    let dataResolve = (data) => {return data;}
    
    const promise = new Promise((resolve, reject) => {
      dataResolve = resolve;
    });

    queue.push({
      command: command,
      waitForInput: waitForInput,
      resolve: dataResolve
    });
    processNext();
    return promise;
  },

  isReady: () => { return ready }
}