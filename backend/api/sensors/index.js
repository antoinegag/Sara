const express = require('express');
const router = express.Router();
const sensor = require('../../arduino/sensors/sensors');

router.get('/', async (req, res) => {
  const values = await sensor.getAll();
  return res.json(values);
});

router.use('/temperature', require('./temperature'));
router.use('/light', require('./light'));

module.exports = router;
