import endpoints from "./endpoints"
import APIRequestHandler from "../APIRequestHandler";

export default class LightAPI {
  static setWhite() {
    console.log(endpoints.COLOR_WHITE);
    APIRequestHandler.query(endpoints.COLOR_WHITE);
  }

  static increaseBrightness() {
    APIRequestHandler.query(endpoints.INCREASE_BRIGHTNESS);
  }

  static decreaseBrightness() {
    APIRequestHandler.query(endpoints.DECREASE_BRIGHTNESS);
  }

  static cycleColor() {
    APIRequestHandler.query(endpoints.CYCLE_COLOR);
  }

  static toggleLights() {
    APIRequestHandler.query(endpoints.TOGGLE_LIGHTS);
  }
}