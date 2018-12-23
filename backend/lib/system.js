const time = require('./time');
const os = require('os');

module.exports = {
  getFormattedProcessUptime: () => {
    return time.formatSeconds(process.uptime());
  },
  getProcessUptime: () => {
    return process.uptime();
  },
  getServerUptime: () => {
    return os.uptime();
  },
  getFormattedServerUptime: () => {
    return time.formatSeconds(os.uptime());
  },
};
