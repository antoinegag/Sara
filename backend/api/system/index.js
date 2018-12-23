const express = require('express');
const router = express.Router();

router.use('/uptime', require('./uptime'));

module.exports = router;
