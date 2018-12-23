const express = require('express');
const router = express.Router();
const system = require('../../lib/system');

router.get('/', (req, res) => {
  return res.json(
      {
        process_uptime: system.getFormattedProcessUptime(),
        server_uptime: system.getFormattedServerUptime(),
      }
  );
});

module.exports = router;
