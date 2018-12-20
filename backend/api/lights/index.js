const express = require('express')
const router = express.Router()
const lights = require('../../arduino/lights/lights');

let actions = {
  'toggle': () => lights.toggleLights(),
  'ib': () => lights.increaseBrightness(),
  'db': () => lights.decreaseBrightness(),
  'cc': () => lights.cycleColor(),
  'w': () => lights.setWhite()
}

router.get("/action", (req, res) => {
  res.status(400);
  res.json({ Error: "missing action parameter" });
});

router.get("/action/:action", (req, res) => {
  let action = req.params.action;
  let todo = actions[action];
  if (!todo) {
    res.status(400);
    res.json({ Error: `Unknown action ${action}` });
  }
  todo();
  res.json({Success: true});
});

module.exports = router;
