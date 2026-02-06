
import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Assuming you create a separate CSS file for styles

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'a1b544cf494d9fc5d1dc7089fab0e834';

  const fetchWeather = async () => {
    setLoading(true);
    setError('');

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
          },
        }
      );

      setWeather(data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    if (!city.trim()) {
      alert('Please enter a city name');
      return;
    }
    fetchWeather();
  };

  return (
    <div className="weather-container">
      <h1 className="weather-header">Weather App</h1>

      <div className="input-container">
        <input
          className="city-input"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="fetch-button" onClick={handleClick}>
          Get Weather
        </button>
      </div>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p className="temperature">{Math.round(weather.main.temp)}°C</p>
          <p className="description">{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;


