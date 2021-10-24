import { useEffect, useState } from 'react';
import axios from 'axios';
import './assets/css/App.css';
import { CountryDetail } from './components/CountryDetail';
import { CountryList } from './components/CountryList';

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    if (search) {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${search}`
      );
      setCountries(data);
    }
  }, [search]);

  return (
    <div>
      <label>
        Find countries:
        <input onChange={({ target }) => setSearch(target.value)} />
      </label>

      {countries.length > 10 && (
        <p>Too many matches. Please specify another filter.</p>
      )}
      {countries.length === 1 ? (
        <CountryDetail country={countries[0]} />
      ) : (
        <CountryList countries={countries} />
      )}
    </div>
  );
}

export default App;
