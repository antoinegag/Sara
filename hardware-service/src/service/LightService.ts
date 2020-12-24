import LightActions from "../serial/action/lights";
import serialPort from "../serial";

export function toggleLights() {
  serialPort.write(LightActions.TOGGLE);
}

export function increaseBrightness() {
  serialPort.write(LightActions.INCREASE_BRIGHTNESS);
}

export function decreaseBrightness() {
  serialPort.write(LightActions.DECREASE_BRIGHTNESS);
}

export function setColorWhite() {
  serialPort.write(LightActions.COLOR_WHITE);
}

export function cycleColor() {
  serialPort.write(LightActions.COLOR_CYCLE);
}
