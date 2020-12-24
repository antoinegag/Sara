import fetch, { RequestInit } from "node-fetch";
import APIResponse from "../api/APIResponse";

const HOST = process.env.HARDWARE_SERVICE_HOST;

const LightActions = {
  TOGGLE: "TOGGLE",
  INCREASE_BRIGHTNESS: "INCREASE_BRIGHTNESS",
  DECREASE_BRIGHTNESS: "DECREASE_BRIGHTNESS",
  COLOR_WHITE: "COLOR_WHITE",
  COLOR_CYCLE: "COLOR_CYCLE",
};

async function fetchHardwareService(endpoint: string, options?: RequestInit) {
  return fetch(`${HOST}${endpoint}`, options);
}

async function postAction(endpoint: string, action: string) {
  const res = await fetchHardwareService(endpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      action: action,
    }),
  });

  const json = (await res.json()) as APIResponse;

  return json.success;
}

export async function toggleLights() {
  return postAction("/lights", LightActions.TOGGLE);
}

export async function increaseBrightness() {
  return postAction("/lights", LightActions.INCREASE_BRIGHTNESS);
}

export async function decreaseBrightness() {
  return postAction("/lights", LightActions.DECREASE_BRIGHTNESS);
}

export async function setColorWhite() {
  return postAction("/lights", LightActions.COLOR_WHITE);
}

export async function cycleColor() {
  return postAction("/lights", LightActions.COLOR_CYCLE);
}
