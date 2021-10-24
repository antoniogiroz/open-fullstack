import { useEffect, useState } from 'react';
import axios from 'axios';
import './assets/css/App.css';
import { CountryDetail } from './components/CountryDetail';
import { CountryList } from './components/CountryList';

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(async () => {
    if (!search) {
      setCountries([]);
      setSelectedCountry(null);
      return;
    }

    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${search}`
    );

    const country = data.length === 1 ? data[0] : null;
    setCountries(data);
    setSelectedCountry(country);
  }, [search]);

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <label>
        Find countries:
        <input onChange={handleSearch} />
      </label>

      {selectedCountry && <CountryDetail country={selectedCountry} />}

      {!selectedCountry && (
        <CountryList countries={countries} showCountry={handleShowCountry} />
      )}
    </div>
  );
}

export default App;
