const SerialPort = require('serialport');
const Delimiter = require('@serialport/parser-delimiter')

const address = process.env.ARDUINO_PORT || '/dev/ttyUSB0';
const port = new SerialPort(address)
console.info(`Arduino port set to ${address}`);

const parser = port.pipe(new Delimiter({ delimiter: '\r\n' }))

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
parser.on('data', (data) => {
  let string = data.toString();
  if (ready) {
    if(waitingForData) {
      let entry = queue[0];
      entry.resolve(string);
      waitingForData = false;
      queue.shift();
      processNext();
    } else {
      console.warn(`${new Date()} - Got unexpected data: ${string} (ignored)`);
    }
  } else {
    if (string == 'READY') {
      ready = true;
      console.info(`Arduino @ ${address} ready`);
      processNext();
    } else {
      console.warn(`Received data "${string}" but Arduino is not ready`);
    }
  }
});

/**
 * Process the next command in queue
 */
function processNext() {
  if(!ready || waitingForData || queue.length == 0) return;

  let entry = queue[0];

  if(entry.waitForInput) {
    waitingForData = true;
    port.write(entry.command);
  } else {
    port.write(entry.command);
    queue.shift(); //Remove processed entry
    entry.resolve();
    processNext();
  }
}

/**
 * Handle serial port related errors
 */
port.on('error', (err) => {
  console.error('Serial port error');
  console.error(`Error: ${err}`);
  //process.exit(1); //TODO: Properly handle errors
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

  isReady: () => { return ready },
  port: port
}