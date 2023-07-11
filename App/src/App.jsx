import './App.css'
import React, { useState, useEffect } from 'react';
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Geolocation  from './Components/Geolocation';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("london");
  const [inputCity, setInputCity] = useState("");
  const API_KEY = 'ef494ceb6c433d1058a661ce25d99bac';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setWeatherData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, [API_URL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputCity);
    setInputCity('');
  };

  return (
    <div>
    <Navbar />
      <div className='flex flex-col gap-5'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5sm lg:text-6sm dark:text-white'>Weather App</h1>
      <Geolocation />
      <form onSubmit={handleSubmit}>
      <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
      <div className='flex items-center'>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input  placeholder="Enter a location" className="block max-w-max p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <button type="submit" className="text-white align-middle justify-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Weather</button>
        </div>
        </div>
      </form>
      </div>
      {weatherData && (
        <div className='flex my-12 flex-col gap-2'>
          <h2 className='text-3xl font-extrabold'>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {Math.floor(weatherData.main.temp - 273.15)}°C</p>
          <p>Humidity: {weatherData.main.humidity} % </p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      ) }
      <Footer />
      
    </div>
  );
}

export default App;