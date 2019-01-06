const express = require('express');
const router = express.Router();
const presets = require('./presets');

router.get('/:name', async (req, res) => {
  const name = req.params.name;
  const preset = presets[name];
  if (!preset) {
    res.status(400);
    res.json({Error: `Unknown preset ${action}`});
  }
  preset();
  return res.json({sucess: true});
});

module.exports = router;
