import Country from "./Country";

function CountriesList({ countries, query }) {
  if (!countries.length) return;

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="grid grid-cols-4 gap-10">
      {" "}
      {filteredCountries.map((country) => (
        <Country key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default CountriesList;
