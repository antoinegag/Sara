const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  return res.json({ success: true});
});

router.use("/test", require("./test"));

module.exports = router;