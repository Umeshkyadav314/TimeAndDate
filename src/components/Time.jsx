import React, { useState } from "react";


function Time() {
  setInterval(updateTime);
  setInterval(updateDate);
  const nowTime = new Date().toLocaleDateString();
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  const [date, setDate] = useState(nowTime);

  // brightness

  function updateTime() {
    const currTime = new Date().toLocaleTimeString();
    setTime(currTime);
  }
  function updateDate() {
    const currdate = new Date().toLocaleDateString();
    setDate(currdate);
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <button style={{ width: 200 }} onClick={updateDate}>
        Today Date
      </button>
      <h2 style={{ fontSize: 50 }}>{date}</h2>
      <button style={{ width: 200 }} onClick={updateTime}>
        Today Time
      </button>
      <h2 style={{ fontSize: 50 }}>{time}</h2>
    </div>
  );
}

export default Time;
