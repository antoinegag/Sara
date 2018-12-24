import endpoints from "./endpoints"
import APIRequestHandler from "../APIRequestHandler";

export default class SensorAPI {
  static getTemperature() {
    return APIRequestHandler.query(endpoints.TEMPERATURE).then((temp) => {
      return parseFloat(temp.temperature);
    });
  }

  static getLightLevel() {
    return APIRequestHandler.query(endpoints.LIGHT).then((level) => {
      return parseInt(level.light_level);
    });
  }
}