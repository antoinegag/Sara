const express = require('express');
const router = express.Router();

router.use('/uptime', require('./uptime'));
router.use('/arduino', require('./arduino'));

module.exports = router;
