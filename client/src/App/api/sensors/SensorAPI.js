import endpoints from "./endpoints"
import APIRequestHandler from "../APIRequestHandler";

export default class SensorAPI {
  static getTemperature() {
    return APIRequestHandler.query(endpoints.TEMPERATURE).then((temp) => { return parseFloat(temp.temperature) });
  }
}