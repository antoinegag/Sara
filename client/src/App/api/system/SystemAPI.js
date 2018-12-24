import endpoints from "./endpoints"
import APIRequestHandler from "../APIRequestHandler";

export default class SystemAPI {
  static getAll() {
    return APIRequestHandler.query(endpoints.ALL);
  }

  static getArduino() {
    return APIRequestHandler.query(endpoints.ARDUINO);
  }

  static getUptime() {
    return APIRequestHandler.query(endpoints.UPTIME);
  }

  static getDatabase() {
    return APIRequestHandler.query(endpoints.DATABASE);
  }
}