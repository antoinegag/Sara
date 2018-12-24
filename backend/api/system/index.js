const express = require('express');
const router = express.Router();

const arduino = require('../../arduino/serial');
const system = require('../../lib/system');
const database = require('../../lib/database');

router.get('/', async (req, res) => {
  const databaseStatus = await database.getStatus();

  return res.json(
      {
        arduino: {
          online: arduino.isReady(),
        },
        server: system.getServerInfo(),
        process: system.getProcessInfo(),
        database: databaseStatus,
      }
  );
});

router.use('/server', require('./server'));
router.use('/process', require('./process'));
router.use('/arduino', require('./arduino'));
router.use('/database', require('./database'));

module.exports = router;