import { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weatherApi';

export default function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather('Kyiv').then(setWeather).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Моє місто — Київ</h2>
      <p>Київ — столиця України, з багатою історією та культурою.</p>
      {weather && (
        <div>
          <h3>Погода зараз:</h3>
          <p>{weather.location.name}, {weather.location.country}</p>
          <p>Температура: {weather.current.temp_c}°C</p>
          <p>{weather.current.condition.text}</p>
          <p>Координати: {weather.location.lat}, {weather.location.lon}</p>
        </div>
      )}
    </div>
  );
}
