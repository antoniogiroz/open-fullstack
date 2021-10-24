export function CountryList({ countries, showCountry }) {
  if (countries.length > 10) {
    return <p>Too many matches. Please specify another filter.</p>;
  }

  return (
    <div>
      {countries.map((country) => (
        <p key={country.name.common}>
          {country.name.common}
          <button onClick={() => showCountry(country)}>Show</button>
        </p>
      ))}
    </div>
  );
}
