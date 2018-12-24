const time = require('./time');
const os = require('os');
const disk = require('diskusage');
const prettyBytes = require('pretty-bytes');

const path = os.platform() === 'win32' ? 'c:' : '/';

/**
 * @return {JSON} Disk info for / or c:
 */
function getDiskInfo() {
  const info = disk.checkSync(path);
  
  return {
    path: path,
    available: info.available,
    available_f: prettyBytes(info.available),
    free: info.free,
    free_f: prettyBytes(info.free),
    total: info.total,
    total_f: prettyBytes(info.total),
  };
}

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
    arch: os.arch(),
    hostname: os.hostname(),
    platform: os.platform(),
    type: os.type(),
    release: os.release(),
    disk: getDiskInfo(),
  };
}

/**
 * @return {JSON} process info
 */
function getProcessInfo() {
  return {
    uptime: getFormattedProcessUptime(),
    node_version: process.version,
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
