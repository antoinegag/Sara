const serial = require('../../serial');
const cmd = require('../../commands');

module.exports = {

  /**
   * Get the current light level
   * @return {Promise<String>} Promise with the light level as a string
   */
  getRawLightLevel() {
    return serial.sendCommand(cmd.GET_LIGHT_LEVEL, true);
  },

  /**
   * Get the current light level
   * @return {Promise<Number>} Promise with the light level as an int
   */
  getLightLevel() {
    return this.getRawLightLevel().then((val) => {
      return parseInt(val);
    });
  },
};
