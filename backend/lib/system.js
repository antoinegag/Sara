const time = require('./time');
const os = require('os');

/**
 * @return {String} process uptime formated as a human readable string
 */
function getFormattedProcessUptime() {
  return time.formatSeconds(process.uptime());
}

/**
 * @return {number} process uptime in seconds
 */
function getProcessUptime() {
  return process.uptime();
}

/**
 * @return {number} server uptime in seconds
 */
function getServerUptime() {
  return os.uptime();
}

/**
 * @return {string} server uptime formatted as a human readable string
 */
function getFormattedServerUptime() {
  return time.formatSeconds(os.uptime());
}

/**
 * @return {JSON} server info
 */
function getServerInfo() {
  return {
    uptime: getFormattedServerUptime(),
  };
}

/**
 * @return {JSON} process info
 */
function getProcessInfo() {
  return {
    uptime: getFormattedProcessUptime(),
  };
}

module.exports = {
  getFormattedProcessUptime: getFormattedProcessUptime,
  getProcessInfo: getProcessInfo,
  getServerUptime: getServerUptime,
  getProcessUptime: getProcessUptime,
  getFormattedServerUptime: getFormattedServerUptime,
  getServerInfo: getServerInfo,
};
