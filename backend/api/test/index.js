const express = require('express')
const router = express.Router()
const pg = require('../../pg');

router.get("/", (req, res) => {
  return pg.any("SELECT * FROM test").then(result => res.json(result));
});

module.exports = router;
