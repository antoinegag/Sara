const TuyAPI = require("tuyapi");

export interface TuyaLightsState {
  on: boolean;
  mode: "white" | "colour" | "scene" | "music";
  brightness: number;
  temperature: number;
  colour: string;
  sceneData: string;
  countdown: number;
}

const DPSKeys = {
  on: "20",
  mode: "21",
  brightness: "22",
  temperature: "23",
  colour: "24",
  sceneData: "25",
  countdown: "26",
};

export default class TuyaClient {
  static device: any;

  static async init(deviceId: string, deviceKey: string) {
    TuyaClient.device = new TuyAPI({
      id: deviceId,
      key: deviceKey,
      issueGetOnConnect: false,
    });
  }
  static async connect() {
    await this.device.find();
    await this.device.connect();
  }

  static async connectIfNotConnected() {
    if (!this.device.isConnected()) {
      await this.connect();
    }
  }

  static async disconnect() {
    await this.device.disconnect();
  }

  static async setDPS(key: string, value: any) {
    await this.connectIfNotConnected();
    let obj: { [key: string]: any } = {};
    obj[key] = value;
    await this.device.set({ multiple: true, data: obj });
  }

  static async setPowerState(on: boolean) {
    await this.connectIfNotConnected();
    await this.setDPS(DPSKeys.on, on);
  }

  static async turnOff() {
    await this.setPowerState(true);
  }

  static async turnOn() {
    await this.setPowerState(false);
  }

  static async getState() {
    await this.connectIfNotConnected();
    const { dps } = await this.device.get({ schema: true });

    return {
      on: dps["20"],
      mode: dps["21"],
      brightness: dps["22"],
      temperature: dps["23"],
      colour: dps["24"],
      sceneData: dps["25"],
      countdown: dps["26"],
    } as TuyaLightsState;
  }

  static async togglePoweredState() {
    await this.connectIfNotConnected();
    const state = await this.getState();

    await this.setPowerState(!state.on);
  }

  static async setBrightness(value: number) {
    await this.connectIfNotConnected();
    await this.setDPS(DPSKeys.brightness, value);
  }

  static async increaseBrightness(step: number) {
    await this.connectIfNotConnected();
    const { brightness } = await this.getState();

    await this.setDPS(DPSKeys.brightness, Math.min(brightness + step, 1000));
  }

  static async decreaseBrightness(step: number) {
    await this.connectIfNotConnected();
    const { brightness } = await this.getState();

    await this.setDPS(DPSKeys.brightness, Math.max(brightness - step, 0));
  }
}
