const express = require('express');
const router = express.Router();

const tempSensor = require('../../arduino/sensors/atmospheric/temperature');

router.get('/', async (req, res) => {
  const temp = await tempSensor.getTemperature();
  return res.json({temperature: temp});
});

module.exports = router;
