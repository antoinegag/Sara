const serial = require('../../arduino/serial');
const lightControl = require('../../arduino/lights/lights');
const light = require('../../arduino/sensors/atmospheric/light');

module.exports = {
  'sleep': async () => {
    const lvl = await light.getLightLevel();
    if (lvl > 200) { // Means the light is in "white" mode
      lightControl.cycleColor(); // Put to first color (Yellow)
    }

    let count = 0;
    const handle = setInterval(async () => {
      await lightControl.decreaseBrightness();
      count++;
      if (count == 3) clearInterval(handle);
    }, 500);
  },
};
