const express = require('express');
const router = express.Router();

const history = require('../../historic/history');

router.get('/temperature', async (req, res) => {
  return res.json(await history.fetchAllTemperatureHistory(req.query.unix));
});

router.get('/temperature/24', async (req, res) => {
  return res.json(await history.fetchLastDayTemperatureHistory(req.query.unix));
});

module.exports = router;
