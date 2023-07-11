import React, { useEffect, useState } from 'react';

const Forecast = (weatherData) => {
  const [forecastData, setForecastData] = useState(null);
  const API_KEY = 'ef494ceb6c433d1058a661ce25d99bac';
  const latitude = weatherData.coord.lat;
  const longitude = weatherData.coord.lon;
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  setLocation({ latitude, longitude });
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [API_URL]);

  if (!forecastData) {
    return <p>Loading forecast data...</p>;
  }
  const forecastList = forecastData.list.slice(0, 5);
  return (
    
    <div className="grid gap-4">
      {forecastList.map((forecast) => (
        <div
          key={forecast.dt}
          className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center"
        >
          <p>{forecast.dt_txt}</p>
          <img
            src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
            alt={forecast.weather[0].description}
            className="h-12 w-12"
          />
          <p>{forecast.main.temp} °C</p>
          <p>{forecast.weather[0].description}</p>
        </div>
      ))}
    </div>
    
  );
};



export default Forecast;
