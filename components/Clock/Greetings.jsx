import React from "react";

export const Greeting = () => {
  var myDate = new Date();
  var hours = myDate.getHours();

  // var hours= new Date().getHours();
  var greet;

  if (hours < 12) greet = "morning";
  else if (hours >= 12 && hours <= 17) greet = "afternoon";
  else if (hours >= 17 && hours <= 24) greet = "evening";

  return (

  <h1  className="text-[#53967A] text-[24px]">Good {greet}!</h1>
  );
};

export default Greeting;
