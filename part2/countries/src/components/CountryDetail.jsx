import { CountryWeather } from './CountryWeather';

export function CountryDetail({ country }) {
  return (
    <div>
      <h1>{country.name.common}</h1>

      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>

      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img
        width="300px"
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
      />

      <h2>Weather in {country.capital}</h2>
      <CountryWeather capitalName={country.capital} />
    </div>
  );
}
