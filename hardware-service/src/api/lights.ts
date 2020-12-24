import { Router } from "express";
import * as LightService from "../service/LightService";

const router = Router();

router.post("/", (req, res) => {
  const { body } = req;

  if (!body || !body.action) {
    return res
      .status(400)
      .json({
        success: false,
        code: "MISSING_PARAMETER",
        error: "Missing parameter: action",
      });
  }
  const { action } = body;

  switch (action) {
    case "TOGGLE":
      LightService.toggleLights();
      break;
    case "INCREASE_BRIGHTNESS":
      LightService.increaseBrightness();
      break;
    case "DECREASE_BRIGHTNESS":
      LightService.decreaseBrightness();
      break;
    case "COLOR_WHITE":
      LightService.setColorWhite();
      break;
    case "COLOR_CYCLE":
      LightService.cycleColor();
      break;
    default:
      return res
        .status(400)
        .json({
          success: false,
          code: "UNKNOWN_ACTION",
          error: `Unknown action ${action}`,
        });
      break;
  }

  return res.json({ success: true });
});

export default router;
