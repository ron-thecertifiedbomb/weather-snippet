import Head from "next/head";
import WeatherApp from "../components/WeatherApp";
import Clock from "../components/Clock/Clock";
import Stopwatch from "../components/Stopwatch";


export default function Home() {
  return (
    <div className="bg-[#EBEBEB] w-full h-screen flex md:pt-4 md:pb-4">
      <Head>
        <title>Weathep App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
        <Clock />
    
    </div>
  );
}
