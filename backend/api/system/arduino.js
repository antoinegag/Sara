const express = require('express');
const router = express.Router();
const arduino = require('../../arduino/serial');

router.get('/', (req, res) => {
  return res.json({online: arduino.isReady()});
});

router.post('/reconnect', (req, res) => {
  arduino.reset();
  return res.json({success: true});
});

router.post('/connect', (req, res) => {
  arduino.connect();
  return res.json({success: true});
});

router.post('/disconnect', (req, res) => {
  arduino.disconnect();
  return res.json({success: true});
});

module.exports = router;
