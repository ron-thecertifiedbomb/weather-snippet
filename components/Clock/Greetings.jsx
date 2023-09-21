import React from "react";

export const Greeting = () => {
  var myDate = new Date();
  var hours = myDate.getHours();

  // var hours= new Date().getHours();
  var greet;

  if (hours < 12) greet = "Morning";
  else if (hours >= 12 && hours <= 17) greet = "Afternoon";
  else if (hours >= 17 && hours <= 24) greet = "Evening";

  return (

  <h1  className="text-[#53967A] text-[24px]">Good {greet}!</h1>
  );
};

export default Greeting;
