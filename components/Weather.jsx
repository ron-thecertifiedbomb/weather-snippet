import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col h-full m-auto p-4 pt-10 pb-5 text-gray-300 z-10">
      {/* Top */}
         <div className="flex flex-col  items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="130"
            height="130"
          /> 
          {/* <p className="text-2xl">{data.weather[0].main}</p> */}
        </div> 
        <div className="flex flex-col justify-center items-center"> 
        <p className="text-[18px] text-center mb-4">{data.name}</p>
        {/* <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          /> */}
       
        <p className="text-6xl lg:text-7xl lg:pt-0">{data.main.temp.toFixed(0)}&#176;</p>
        
    
       
 
        </div>
   

       <div className="p-5 rounded-md">
      
        <div className="flex gap-5 text-center justify-center">
          <div>
            <p className=" font-normal text-xl">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-xs">Feels Like</p>
          </div>
          <div>
            <p className="font-normal text-xl">{data.main.humidity}%</p>
            <p className="text-xs">Humidity</p>
          </div>
          <div>
            <p className="font-normal text-xl">
              {data.wind.speed.toFixed(0)} mph 
            </p>
            <p className=" text-xs">Winds</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Weather;
