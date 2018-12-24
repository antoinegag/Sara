const express = require('express');
const router = express.Router();
const system = require('../../lib/system');

router.get('/', (req, res) => {
  return res.json(system.getProcessInfo());
});

module.exports = router;
