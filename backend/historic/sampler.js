const schedule = require('node-schedule');
const db = require('../pg');
const temperature = require('../arduino/sensors/atmospheric/temperature');
const logger = require('../logger');

/**
 * Schedule sampling for temperature
 */
function scheduleSampling() {
  schedule.scheduleJob('*/30 * * * *', async () => { // Every 30 minutes
    const temp = await temperature.getTemperature();
    db.none('INSERT INTO temperature (temperature) VALUES ($1)', [temp]);
  });
  logger.info('Sampling scheduled');
}

module.exports = {
  scheduleSampling: scheduleSampling,
};
