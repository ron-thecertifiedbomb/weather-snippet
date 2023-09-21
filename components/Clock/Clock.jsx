import React, { useState, useEffect } from "react";
import Time from "../Time";
import Greeting from "./Greetings";
import LocationComponent from "../Location";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const hourRotation = time.getHours() * 30;
  const minuteRotation = time.getMinutes() * 6;
  const secondRotation = time.getSeconds() * 6;

  return (
    <div className="bg relative">
      <div className="absolute top-[30px] left-[35px] lg:top-[40px] lg:left-[40px]">
      <Greeting />
      <LocationComponent />
      </div>
      <div className="flex flex-col-reverse w-full relative h-[500px]">
        <div className="clock">
          <div className="inner-background">
            <div
              className="hour_hand"
              style={{
                transform: `rotateZ(${hourRotation}deg)`,
              }}
            ></div>

            <div
              className="min_hand"
              style={{
                transform: `rotateZ(${minuteRotation}deg)`,
              }}
            />
            <div
              className="sec_hand"
              style={{
                transform: `rotateZ(${secondRotation}deg)`,
              }}
            />
          </div>
        </div>
        <Time />
    
      </div>
    </div>
  );
};

export default Clock;
