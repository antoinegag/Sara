const express = require('express');
const router = express.Router();

const history = require('../../historic/history');

router.get('/temperature', async (req, res) => {
  return res.json(await history.fetchAllTemperatureHistory(true));
});

router.get('/temperature/24', async (req, res) => {
  return res.json(await history.fetchLastDayTemperatureHistory(true));
});

module.exports = router;
