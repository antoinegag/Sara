import React, { useEffect, useState } from "react";
import { TrelloCard, WeatherData } from "./api/ResponseTypes";
import { getTodaysInfo } from "./api/today";
import styles from "./App.module.css";
import Clock from "./components/Clock";
import Remote from "./components/Remote";
import TaskList from "./components/TaskList";
import Weather from "./components/Weather";

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
      <div className="flex justify-between">
        <div>
          <Clock className={styles.clock} />
        </div>
        <div>{today && <Weather weather={today.weather} />}</div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="w-3/4">
          <div className="text-4xl font-semibold mb-5 text-orange">Today</div>
          {today && (
            <div>
              <TaskList cards={today.tasks} />
            </div>
          )}
        </div>
        <div className="w-1/4">
          <Remote />
        </div>
      </div>
    </div>
  );
}

export default App;
