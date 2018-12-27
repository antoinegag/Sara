import endpoints from "./endpoints"
import APIRequestHandler from "../APIRequestHandler";

export default class HistoricAPI {
  static getAllTemperatureHistory(unix) {
    return APIRequestHandler.query(endpoints.TEMPERATURE_ALL);
  }

  static getLastDayTemperatureHistory(unix) {
    return APIRequestHandler.query(endpoints.TEMPERATURE_24H);
  }
}