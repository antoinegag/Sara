const express = require('express');
const router = express.Router();

const lightSensor = require('../../arduino/sensors/atmospheric/light');

router.get('/', async (req, res) => {
  const level = await lightSensor.getLightLevel();
  return res.json({light_level: level});
});

module.exports = router;
