import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";

export default function WeatherGenerator({ location }) {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const fetchWeather = async (location) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
      const response = await axios.get(url);
      setWeather(response.data);
      setError(null); // Clear any previous error
    } catch (error) {
      setError("An error occurred while fetching weather data.");
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <WeatherDetails data={weather} />
      )}
    </div>
  );
}
