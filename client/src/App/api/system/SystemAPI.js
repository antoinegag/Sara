import endpoints from "./endpoints"
import APIRequestHandler from "../APIRequestHandler";

export default class SystemAPI {
  static getAll() {
    return APIRequestHandler.query(endpoints.ALL);
  }

  static getArduino() {
    return APIRequestHandler.query(endpoints.ARDUINO);
  }

  static getServer() {
    return APIRequestHandler.query(endpoints.SERVER);
  }

  static getProcess() {
    return APIRequestHandler.query(endpoints.PROCESS);
  }

  static getDatabase() {
    return APIRequestHandler.query(endpoints.DATABASE);
  }
}