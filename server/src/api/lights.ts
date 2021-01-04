import { Router } from "express";
import * as LightService from "../service/HardwareServiceClient";
import TuyaClient from "../service/TuyaAPIClient";
import APIResponse from "./APIResponse";

const router = Router();

interface LightAction {
  device: string;
  action: string;
  params?: { [key: string]: any };
}

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

  const actionBody: LightAction = body.action;
  const { action, device, params } = actionBody;

  switch (action) {
    case "GET_STATE":
      const state = await TuyaClient.getState();
      return res.status(200).json({
        success: true,
        data: {
          ...state,
        },
      } as APIResponse);
      break;
    case "TOGGLE":
      if (device === "ALL") {
        await LightService.toggleLEDs();
        await TuyaClient.togglePoweredState();
      } else if (device === "LED") {
        await LightService.toggleLEDs();
      } else if (device === "MAIN") {
        await TuyaClient.togglePoweredState();
      }
      break;
    case "SET_BRIGHTNESS":
      if (device === "ALL" || device === "MAIN") {
        await TuyaClient.setBrightness(params?.value);
      }
      break;
    case "INCREASE_BRIGHTNESS":
      if (device === "ALL") {
        await LightService.increaseLEDBrightness();
        await TuyaClient.increaseBrightness(10);
      } else if (device === "LED") {
        await LightService.increaseLEDBrightness();
      } else if (device === "MAIN") {
        await TuyaClient.increaseBrightness(10);
      }
      break;
    case "DECREASE_BRIGHTNESS":
      if (device === "ALL") {
        await LightService.decreaseLEDBrightness();
        await TuyaClient.decreaseBrightness(10);
      } else if (device === "LED") {
        await LightService.decreaseLEDBrightness();
      } else if (device === "MAIN") {
        await TuyaClient.decreaseBrightness(10);
      }
      break;
    case "COLOR_WHITE":
      await LightService.setLEDColorWhite();
      break;
    case "COLOR_CYCLE":
      await LightService.cycleLEDColor();
      break;
    default:
      return res.status(400).json({
        success: false,
        error: {
          id: "UNKNOWN_ACTION",
          message: `Unknown action ${actionBody}`,
        },
      } as APIResponse);
      break;
  }

  return res.json({ success: true } as APIResponse);
});

export default router;
