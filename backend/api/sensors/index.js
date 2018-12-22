const express = require('express');
const router = express.Router();

router.use('/temperature', require('./temperature'));

module.exports = router;
