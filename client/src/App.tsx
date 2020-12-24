import React, { useEffect, useState } from "react";
import { toggleLights } from "./api/lights";
import { TrelloCard, WeatherData } from "./api/ResponseTypes";
import { getTodaysInfo } from "./api/today";

function App() {
  const [today, setToday] = useState<{
    weather: WeatherData;
    tasks: TrelloCard[];
  }>();

  useEffect(() => {
    async function toggle() {
      const data = await getTodaysInfo();
      setToday(data);
      toggleLights();
    }

    toggle();
  }, []);

  return (
    <div>
      <button onClick={() => toggleLights()}>TOGGLE</button>
      <pre>{JSON.stringify(today, null, 2)}</pre>
    </div>
  );
}

export default App;
