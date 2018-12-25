import endpoints from "./endpoints"
import APIRequestHandler from "../APIRequestHandler";

export default class SensorAPI {
  static getTemperature() {
    return APIRequestHandler.query(endpoints.TEMPERATURE).then((temp) => {
      return temp.temperature;
    });
  }

  static getLightLevel() {
    return APIRequestHandler.query(endpoints.LIGHT).then((level) => {
      return level.light_level;
    });
  }

  static getAll() {
    return APIRequestHandler.query(endpoints.ALL)
  }
}