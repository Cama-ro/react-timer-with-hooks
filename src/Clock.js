import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = (props) => {
  const [date, setDate] = useState(new Date());
  const tick = () => setDate(new Date());

  useEffect(() => {
    let timerID = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div className="clock">
      <h2>{date.toLocaleTimeString()}</h2>
      <button onClick={props.toggleClockMethod}>close clock</button>
    </div>
  );
};

export default Clock;
