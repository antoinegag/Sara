import fetch from "node-fetch";

const TOKEN = process.env.OPENWEATHER_KEY;
const CITY_ID = process.env.CITY_ID;

export async function getCityWeather() {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${TOKEN}&units=metric`
  );

  const json = await res.json();

  return json as WeatherData;
}

export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
