import React, { useState } from 'react';
import axios from 'axios';
function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1b544cf494d9fc5d1dc7089fab0e834&units=metric`
      );

      setWeather(response);


    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleClick = () => {
    if (city.trim() !== '') {
      fetchWeather();
    } else {
      alert('Please enter city');
    }
  };

  return (
    <div className='weather-container'>
      <input
        className="city"
        type='text'
        placeholder='Enter City Name'
        value={city}
        onChange={handleCityChange}
      />
      <button className='btn' onClick={handleClick}>Get Weather 1</button>
      {weather && <>
        <div className='weather-info'>
          <h3>{weather.data.name}</h3>
          <p>{weather.data.main.temp}</p>
          <p>{weather.data.weather[0].description}</p>

        </div>

      </>}
    </div>
  );
}

export default Weather;
