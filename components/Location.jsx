import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherGenerator from "./WeatherGenerator";

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState('null');
  const [location, setLocation] = useState('')

  useEffect(() => {
    const getLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation not available in this browser.");
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      axios
        .get(
          `https://api.opencagedata.com/geocode/v1/json?key=e4e45114aa304b448fa3aca3913e6270&language=en&q=${latitude}+${longitude}`
        )
        .then((response) => {
          const city = response.data.results[0].components.city;
          setCity(city);
          setLocation(city)
          
         
        })
        .catch((error) => {
          console.error("Error fetching city:", error);
        });
    }
  }, [latitude, longitude]);



  return (
    <div>
        
     
      {latitude !== null && longitude !== null ? (
        <>
         <p className="text-[#53967A] text-[12px]">
          Latitude: {latitude.toFixed(6)}
        </p>
        <p className="text-[#53967A] text-[12px]">
         Longitude: {longitude.toFixed(6)}
        </p>
        </>
       
        
      ) : (
        <p className="text-[#53967A] text-[12px]">Loading location...</p>
      )}
<>
      {city && <p className="text-[#53967A] text-[12px]">City: {city}</p>}
      <WeatherGenerator location={location} />
      </>
    </div>
  );
};

export default LocationComponent;
