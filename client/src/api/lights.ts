import APIResponse from "./APIResponse";

const HOST = process.env.REACT_APP_SERVER_HOST;
interface LightAction {
  device: string;
  action: string;
  params?: { [key: string]: any };
}

const LightActions = {
  GET_STATE: "GET_STATE",
  TOGGLE: "TOGGLE",
  SET_BRIGHTNESS: "SET_BRIGHTNESS",
  INCREASE_BRIGHTNESS: "INCREASE_BRIGHTNESS",
  DECREASE_BRIGHTNESS: "DECREASE_BRIGHTNESS",
  COLOR_WHITE: "COLOR_WHITE",
  COLOR_CYCLE: "COLOR_CYCLE",
};

async function fetchServer(endpoint: string, options?: RequestInit) {
  return fetch(`${HOST}${endpoint}`, options);
}

async function postAction(endpoint: string, action: LightAction) {
  const res = await fetchServer(endpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      action: action,
    }),
  });

  const json = (await res.json()) as APIResponse;

  return json;
}

export async function toggleLED() {
  return postAction("/lights", { device: "LED", action: LightActions.TOGGLE });
}

export async function increaseLEDBrightness() {
  return postAction("/lights", {
    device: "LED",
    action: LightActions.INCREASE_BRIGHTNESS,
  });
}

export async function decreaseLEDBrightness() {
  return postAction("/lights", {
    device: "LED",
    action: LightActions.DECREASE_BRIGHTNESS,
  });
}

export async function setLEDColorWhite() {
  return postAction("/lights", {
    device: "LED",
    action: LightActions.COLOR_WHITE,
  });
}

export async function cycleLEDColor() {
  return postAction("/lights", {
    device: "LED",
    action: LightActions.COLOR_CYCLE,
  });
}

export async function toggleMain() {
  return postAction("/lights", { device: "MAIN", action: LightActions.TOGGLE });
}

export async function setMainBrightness(value: number) {
  return postAction("/lights", {
    device: "MAIN",
    action: LightActions.SET_BRIGHTNESS,
    params: {
      value: value,
    },
  });
}

export async function getMainState() {
  return postAction("/lights", {
    device: "MAIN",
    action: LightActions.GET_STATE,
  });
}

export async function increaseMainBrightness() {
  return postAction("/lights", {
    device: "MAIN",
    action: LightActions.INCREASE_BRIGHTNESS,
  });
}

export async function decreaseMainBrightness() {
  return postAction("/lights", {
    device: "MAIN",
    action: LightActions.DECREASE_BRIGHTNESS,
  });
}

export async function setMainColorWhite() {
  return postAction("/lights", {
    device: "MAIN",
    action: LightActions.COLOR_WHITE,
  });
}
