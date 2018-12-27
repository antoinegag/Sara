const db = require('../pg');

/**
 * Fetch all temperature measurments
 * @param {boolean} chrono
 * @return {Promise<JSON>}
 */
function fetchAllTemperatureHistory(chrono) {
  const unix = false;
  if (unix) {
    return db.any('SELECT EXTRACT(epoch FROM time) AS time, temperature FROM temperature');
  } else {
    return db.any('SELECT time, temperature FROM temperature');
  }
}

/**
 * Fetch all temperature measurments done in the last 24 hours
 * @param {boolean} chrono if data should be sorted by chronological order
 * @return {Promise<JSON>}
 */
function fetchLastDayTemperatureHistory(chrono) {
  const unix = false;
  if (unix) {
    return db.manyOrNone('SELECT EXTRACT(epoch FROM time) AS time, temperature FROM temperature WHERE time >= NOW() - \'1 day\'::INTERVAL' + (chrono ? ' ORDER BY time ASC':''));
  } else {
    return db.manyOrNone('SELECT time, temperature FROM temperature WHERE time >= NOW() - \'1 day\'::INTERVAL' + (chrono ? ' ORDER BY time ASC':''));
  }
}

module.exports = {
  fetchAllTemperatureHistory: fetchAllTemperatureHistory,
  fetchLastDayTemperatureHistory: fetchLastDayTemperatureHistory,
};
