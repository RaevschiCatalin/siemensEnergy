import React from "react";


const Render = ({ weatherData }) => {
  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

  return (
    <div>
      <h2 className='text-3xl font-extrabold'>{weatherData.name}</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>Temperature: {Math.floor(weatherData.main.temp - 273.15)}°C</p>
      <p>Humidity: {weatherData.main.humidity} % </p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Render;
