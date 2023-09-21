import React, { useEffect, useState } from "react";
// import "../TimeApp/Time.css";

const Time = () => {
  const [currTime, setCurrTime] = useState(0);

  const timeApp = () => {
    setInterval(myTimer, 1000);

    function myTimer() {
      const date = new Date();
      setCurrTime(date.toLocaleTimeString());
    }
  };

  useEffect(() => {
    timeApp();
  }, []);

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const strTime = `${hours}:${minutes} ${ampm}`;

    return strTime;
  };

  console.log(formatAMPM(new Date()));

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const weekday = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"

    // "Sunday",
    // "Monday",
    // "Tuesday",
    // "Wednesday",
    // "Thursday",
    // "Friday",
    // "Saturday",
  ];

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const d = new Date();
  let month = months[d.getMonth()];
  let day = weekday[d.getDay()];
  let time = d.getHours();
  let date = d.toLocaleDateString();
  let hour = addZero(d.getHours());
  let minutes = addZero(d.getMinutes());

  const ampm = hour >= 12 ? "pm" : "am";

  let todayDate = d.getDate();


  const year = d.getFullYear();

  return (
    <div className="flex flex-col w-full justify-center items-center">


      <p className="text-[#53967A] text-[24px] top-text">
        {currTime} 
      </p>
      <p className=" text-[#94C1AE] text-[18px]  bottom-text">
        {day}, {month}, {todayDate},  {year}
      </p>
   
    </div>
  );
};

export default Time;
