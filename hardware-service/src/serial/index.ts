import SerialPort from "serialport";

const arduinoPort = process.env.ARDUINO_PORT || "/dev/ttyUSB0";
const serialPort = new SerialPort(arduinoPort, (err) => {
  if (err) {
    console.error(`Error creating serial port: ${err}`);
  } else {
    console.log(`Serial port created on ${arduinoPort}`);
  }
});

export default serialPort;
