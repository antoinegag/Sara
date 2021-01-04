import React, { useEffect, useRef, useState } from "react";
import {
  decreaseLEDBrightness,
  getMainState,
  increaseLEDBrightness,
  setMainBrightness,
  toggleLED,
  toggleMain,
} from "../../api/lights";
import debounce from "lodash.debounce";
import styles from "./Remote.module.css";
import power from "./power.svg";
import plus from "./plus.svg";
import minus from "./minus.svg";

const Remote = () => {
  useEffect(() => {
    const setInitialBrightness = async () => {
      const state = await getMainState();
      const brightness = state.success && state.data.brightness;
      setTempBrightness(brightness);
    };

    setInitialBrightness();
  }, []);
  const [tempBrightness, setTempBrightness] = useState(0);

  async function sendBrightness(val: number) {
    await setMainBrightness(val);
    setTempBrightness(val);
  }

  const debouncedSetBrightness = useRef(debounce(sendBrightness, 1000)).current;

  return (
    <div className={styles.remote}>
      <div className="mb-5">
        <div className="flex items-center justify-items-center justify-between">
          <div className="text-orange text-3xl font-semibold">Main Lights</div>
          <button className="flex bg-orange" onClick={toggleMain}>
            <img src={power} width={32} />
          </button>
        </div>
        <div className="text-xl font-semibold">
          {(tempBrightness / 10).toFixed(0)} %
        </div>
        <input
          type="range"
          min="1"
          max="1000"
          value={tempBrightness}
          onChange={(e) => {
            const val = Math.max(parseInt(e.target.value), 2);
            setTempBrightness(val);
            debouncedSetBrightness(val);
          }}
        />
      </div>
      <div>
        <div className="text-orange text-3xl font-semibold mb-5">LEDs</div>
        <div className="flex justify-center">
          <button
            onClick={increaseLEDBrightness}
            className="justify-center items-center"
          >
            <img className={styles.white} src={plus} width={24} />
          </button>
          <button className="mx-5" onClick={toggleLED}>
            <img src={power} className={styles.white} width={32} />
          </button>
          <button
            onClick={decreaseLEDBrightness}
            className="justify-center items-center"
          >
            <img className={styles.white} src={minus} width={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Remote;
