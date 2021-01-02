import React, { useEffect, useState } from "react";
import { toggleLights } from "./api/lights";
import { TrelloCard, WeatherData } from "./api/ResponseTypes";
import { getTodaysInfo } from "./api/today";
import styles from "./App.module.css";

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
  }, []);

  return (
    <div className={styles.App}>
      <button onClick={() => toggleLights()} className="bg-red-500">
        TOGGLE
      </button>
      {/* <pre>{JSON.stringify(today, null, 2)}</pre> */}
    </div>
  );
}

export default App;
