const express = require('express')
const router = express.Router()
const pg = require('../../pg');

const dao = require('./dao/test')

router.get("/", (req, res) => {
  return dao.all().then(result => res.json(result));
});

module.exports = router;
