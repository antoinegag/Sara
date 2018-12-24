const express = require('express');
const router = express.Router();
const arduino = require('../../arduino/serial');

router.get('/', (req, res) => {
  return res.json({online: arduino.isReady()});
});

module.exports = router;
