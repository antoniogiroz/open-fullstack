export function CountryList({ countries, showCountry }) {
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
