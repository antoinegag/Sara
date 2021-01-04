import React from "react";
import { IWeather } from "./IWeather";

interface WeatherProps {
  weather: IWeather;
}

const Weather: React.FC<WeatherProps> = ({ weather }) => {
  return (
    <div>
      <div className="text-xl font-semibold">{weather.name}</div>
      <div className="flex items-center">
        <div className="flex text-lg">
          <div className="text-3xl font-semibold">{weather.main.temp}</div>
          &#8451;
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
      </div>
    </div>
  );
};

export default Weather;
