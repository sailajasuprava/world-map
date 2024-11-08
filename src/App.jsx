import { useState } from "react";
import { useEffect } from "react";
import CountriesList from "./components/CountriesList";
import SearchBar from "./components/SearchBar";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <CountriesList countries={countries} query={query} />
    </div>
  );
}

export default App;
