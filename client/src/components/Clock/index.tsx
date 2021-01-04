import React, { HTMLProps, useEffect, useState } from "react";
import Moment from "react-moment";
import "moment-timezone";

const Clock: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(tick);
  });
  return (
    <div className={className}>
      <Moment format="hh:mm A">{time}</Moment>
    </div>
  );
};

export default Clock;
