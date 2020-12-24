import React, { useEffect, useState } from "react";
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
    }

    toggle();
  });

  return (
    <div>
      <pre>{JSON.stringify(today, null, 2)}</pre>
    </div>
  );
}

export default App;
