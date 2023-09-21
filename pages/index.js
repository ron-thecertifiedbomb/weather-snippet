import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";

export default function Home() {
  const [city, setCity] = useState("San Jose Del Monte");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [inputCity, setInputCity] = useState(""); // New state for input

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const fetchWeather = (city) => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        // Handle error
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputCity);
    fetchWeather(inputCity);
    setInputCity("");
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
  };

  return (
    <div className="bg-black h-screen flex">
      <Head>
        <title>Weathep App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Overlay */}
   

       <div className="glass-bg m-auto max-w-[427px] h-[600px] flex flex-col">
        <div>{weather.main && <Weather data={weather} />}</div>

        <div className="h-full flex pl-8 pr-8 ">
          <form
            onSubmit={handleSubmit}
            className="flex justify-between items-center w-full m-auto p-3 rounded-2xl mt-auto input-style"
          >
            <div>
              <input
                onChange={handleInputChange}
                value={inputCity}
                className="bg-transparent border-none text-white focus:outline-none "
                type="text"
                placeholder="Search for a city"
              />
            </div>
            <button type="submit" className="text-[#9CA3AF]">
              <BsSearch size={15} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
