const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({success: true});
});

const sensors = require('./sensors');
const lights = require('./lights');
const system = require('./system');
const historic = require('./historic');
router.use('/lights', lights);
router.use('/sensors', sensors);
router.use('/system', system);
router.use('/historic', historic);

module.exports = router;
