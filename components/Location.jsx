import React, { useState, useEffect } from "react";
import axios from "axios";

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);

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
        })
        .catch((error) => {
          console.error("Error fetching city:", error);
        });
    }
  }, [latitude, longitude]);

  return (
    <div>
     
      {latitude !== null && longitude !== null ? (
        <p className="text-[#53967A] text-[12px]">
          Latitude: {latitude.toFixed(6)}, Longitude: {longitude.toFixed(6)}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
      {city &&  <p className="text-[#53967A] text-[12px]">City: {city}</p>}
    </div>
  );
};

export default LocationComponent;
