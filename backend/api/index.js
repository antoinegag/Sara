const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  return res.json({ success: true});
});

const test = require("./test");
router.use("/test", test);

module.exports = router;