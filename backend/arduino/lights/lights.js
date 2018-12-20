const serial = require('../serial');
const commands = require('./commands');

module.exports = {
  setWhite: () => {
    serial.sendCommand(commands.COLOR_WHITE);
  },
  increaseBrightness: () => {
    serial.sendCommand(commands.INCREASE_BRIGHTNESS);
  },
  decreaseBrightness: () => {
    serial.sendCommand(commands.DECREASE_BRIGHTNESS);
  },
  toggleLights: () => {
    serial.sendCommand(commands.TOGGLE_LIGHTS);
  },
  cycleColor: () =>  {
    serial.sendCommand(commands.COLOR_CYCLE);
  }
}