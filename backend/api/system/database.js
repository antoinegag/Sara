const express = require('express');
const router = express.Router();
const database = require('../../lib/database');

router.get('/', async (req, res) => {
  const status = await database.getStatus();
  return res.json(status);
});

module.exports = router;