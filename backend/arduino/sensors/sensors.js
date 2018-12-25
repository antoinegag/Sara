const serial = require('../serial');
const cmd = require('../commands');

/**
 * @param {String} data
 * @return {JSON}
 */
function parseAll(data) {
  const values = data.split(';'); // Values are separated by semi-colon
  return {
    light_level: parseInt(values[0]),
    temperature: parseFloat(values[1]),
  };
}

module.exports = {

  /**
   * Get the all sensor data
   * @return {Promise<JSON>}
   */
  getAll() {
    return serial.sendCommand(cmd.GET_ALL, true).then((val) => {
      return parseAll(val);
    });
  },
};
