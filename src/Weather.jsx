// import React, { useState } from 'react';
// import axios from 'axios';
// function Weather() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState('');

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const fetchWeather = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1b544cf494d9fc5d1dc7089fab0e834&units=metric`
//       );

//       setWeather(response);


//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   const handleClick = () => {
//     if (city.trim() !== '') {
//       fetchWeather();
//     } else {
//       alert('Please enter city');
//     }
//   };

//   return (
//     <div className='weather-container'>
//       <input
//         className="city"
//         type='text'
//         placeholder='Enter City Your Name'
//         value={city}
//         onChange={handleCityChange}
//       />
//       <button className='btn' onClick={handleClick}>Get Weather</button>
//       {weather && <>
//         <div className='weather-info'>
//           <h3>{weather.data.name}</h3>
//           <p>{weather.data.main.temp}</p>
//           <p>{weather.data.weather[0].description}</p>

//         </div>

//       </>}
//     </div>
//   );
// }

// export default Weather;


import React, { useState } from 'react';
import axios from 'axios';

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
      <input
        className="city"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button className="btn" onClick={handleClick}>
        Get Weather
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>

          {/* Weather Icon */}
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />

          <p className="temp">{Math.round(weather.main.temp)}°C</p>
          <p className="description">
            {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;

