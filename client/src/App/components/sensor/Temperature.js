import React from "react";

export default function Temperature(props) {
  const value = props.value
  return (
    <span>
      {value}	&#8451;
    </span>
  );
};