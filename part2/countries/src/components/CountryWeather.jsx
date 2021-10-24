import { useEffect, useState } from 'react';
import axios from 'axios';

const weatherApiKey = import.meta.env.VITE_WEATHER_STACK_API_KEY;

export function CountryWeather({ capitalName }) {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState();

  useEffect(async () => {
    if (!capitalName) {
      setWeather(null);
      return;
    }

    setLoading(true);
    const { data } = await axios.get(
      `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${capitalName}&units=m`
    );
    setWeather(data.current);
    setLoading(false);
  }, [capitalName]);

  if (loading || !weather) {
    return <p>Loading weather for {capitalName}...</p>;
  }

  return (
    <>
      <p>Temperature: {weather.temperature}ºC</p>
      <img
        width="100px"
        src={weather.weather_icons[0]}
        alt={weather.weather_descriptions[0]}
        title={weather.weather_descriptions[0]}
      />
      <p>
        Wind: {weather.wind_speed} mph. Direction: {weather.wind_dir}
      </p>
    </>
  );
}
