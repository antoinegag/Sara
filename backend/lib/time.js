const moment = require('moment');
// eslint-disable-next-line no-unused-vars
const format = require('moment-duration-format');

module.exports = {
  /**
  * Format a duration in ms to human readable time
  * @param {int} ms
  * @return {string} formatted time as string
  */
  formatMS: function(ms) {
    return moment.duration(ms, 'milliseconds').format();
  },

  /**
   * Format a duration in seconds to human readable time
   * @param {int} seconds
   * @return {string} formatted time as string
   */
  formatSeconds: function(seconds) {
    return moment.duration(seconds, 'seconds').format();
  },
};

