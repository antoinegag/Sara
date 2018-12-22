const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({success: true});
});

const sensors = require('./sensors');
const lights = require('./lights');
router.use('/lights', lights);
router.use('/sensors', sensors);

module.exports = router;
