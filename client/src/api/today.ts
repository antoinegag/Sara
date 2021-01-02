import APIResponse from "./APIResponse";
import { TrelloCard, WeatherData } from "./ResponseTypes";

const HOST = process.env.REACT_APP_SERVER_HOST;

export async function getTodaysInfo() {
  const res = await fetch(`${HOST}/today`);
  const json = (await res.json()) as APIResponse;

  if (json.success) {
    return json.data as { weather: WeatherData; tasks: TrelloCard[] };
  } else {
    console.error("Error fetching today's data", json.error);
    throw new Error("Error fetching today's information");
  }
}

export async function getTodaysTasks() {
  const res = await fetch(`${HOST}/today/tasks`);
  const json = (await res.json()) as APIResponse;

  if (json.success) {
    return json.data as { tasks: TrelloCard[] };
  } else {
    console.error("Error fetching today's tasks", json.error);
    throw new Error("Error fetching today's tasks");
  }
}

export async function getTodaysWeather() {
  const res = await fetch(`${HOST}/weather`);
  const json = (await res.json()) as APIResponse;

  if (json.success) {
    return json.data as { weather: WeatherData };
  } else {
    console.error("Error fetching today's weather", json.error);
    throw new Error("Error fetching today's weather");
  }
}
