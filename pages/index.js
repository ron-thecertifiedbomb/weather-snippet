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
    <div>
      <Head>
        <title>Weathep App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Overlay */}
      <div className="top-0 left-0 right-0 bottom-0 bg-black/40 z-[1] h-full">
        {/* Background image */}
        <Image
          src={`https://source.unsplash.com/1600x900/?${city}`}
          layout="fill"
          className="object-cover"
        />
      </div>
<div className="glass-bg m-auto max-w-[500px] h-[100vh] flex flex-col">
<div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
        >
          <div>
            <input
              onChange={handleInputChange}
              value={inputCity}
              className="bg-transparent border-none text-white focus:outline-none sm:text-1xl lg:text-2xl"
              type="text"
              placeholder="Search city"
            />
          </div>
          <button type="submit">
            <BsSearch size={15} />
          </button>
        </form>
      </div>
      <div>{weather.main && <Weather data={weather} />}</div>
</div>
     



    </div>
  );
}
