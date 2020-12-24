import { Router } from "express";
import * as LightService from "../service/HardwareServiceClient";
import APIResponse from "./APIResponse";

const router = Router();

router.post("/", async (req, res) => {
  const { body } = req;

  if (!body || !body.action) {
    return res.status(400).json({
      success: false,
      error: {
        id: "MISSING_PARAMETER",
        message: "Missing parameter: action",
      },
    } as APIResponse);
  }
  const { action } = body;

  switch (action) {
    case "TOGGLE":
      await LightService.toggleLights();
      break;
    case "INCREASE_BRIGHTNESS":
      await LightService.increaseBrightness();
      break;
    case "DECREASE_BRIGHTNESS":
      await LightService.decreaseBrightness();
      break;
    case "COLOR_WHITE":
      await LightService.setColorWhite();
      break;
    case "COLOR_CYCLE":
      await LightService.cycleColor();
      break;
    default:
      return res.status(400).json({
        success: false,
        error: {
          id: "UNKNOWN_ACTION",
          message: `Unknown action ${action}`,
        },
      } as APIResponse);
      break;
  }

  return res.json({ success: true } as APIResponse);
});

export default router;
