import React from "react";

export default function LightState(props) {
  const value = props.value
  const state = (value < 5 ? "Off" : "On")
  return (
    <span className={state}>
      {state}
    </span>
  );
};