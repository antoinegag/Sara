const serial = require('../serial');
const cmd = require('./../commands');

module.exports = {
  setWhite: () => {
    return serial.sendCommand(cmd.COLOR_WHITE.command);
  },
  increaseBrightness: () => {
    return serial.sendCommand(cmd.INCREASE_BRIGHTNESS);
  },
  decreaseBrightness: () => {
    return serial.sendCommand(cmd.DECREASE_BRIGHTNESS);
  },
  toggleLights: () => {
    return serial.sendCommand(cmd.TOGGLE_LIGHTS);
  },
  cycleColor: () => {
    return serial.sendCommand(cmd.COLOR_CYCLE);
  }
}