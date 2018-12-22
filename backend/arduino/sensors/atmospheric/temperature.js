const serial = require('../../serial');
const cmd = require('../../commands');

module.exports = {

  /**
   * Get the current temperature
   * @return {Promise} Promise with the temperature in degree C as a string
   */
  getRawTemperature() {
    return serial.sendCommand(cmd.GET_TEMP, true);
  },

  /**
   * Get the current temperature
   * @return {Promise} Promise with the temperature in degree C as a float
   */
  getTemperature() {
    return this.getRawTemperature().then((val) => {
      return parseFloat(val);
    });
  },
};
