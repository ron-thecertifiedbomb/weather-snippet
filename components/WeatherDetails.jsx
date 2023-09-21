import Image from "next/image";
import React from "react";

const WeatherDetails = ({ data }) => {
  
  return (
    
 
      
        <div className="flex flex-col">
     
          <p className="text-[#53967A] text-[12px]">
              Feels Like: {data.main.feels_like.toFixed(0)}&#176;
            </p>
          
        
        
          <p className="text-[#53967A] text-[12px]">Humidity: {data.main.humidity}%</p>
          
       
    
          <p className="text-[#53967A] text-[12px]">
             Wind: {data.wind.speed.toFixed(0)}mph 
            </p>
          
        
        </div>
    

      
    
  );
};

export default WeatherDetails;
