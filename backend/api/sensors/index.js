const express = require('express');
const router = express.Router();

router.use('/temperature', require('./temperature'));
router.use('/light', require('./light'));

module.exports = router;
