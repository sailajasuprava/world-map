function SearchBar({ setQuery }) {
  function handleClick(e) {
    setQuery(e.target.value);
  }

  return (
    <form className="p-5 text-center">
      <input
        type="text"
        placeholder="Search country"
        className="border-2 border-stone-700 p-2 w-72"
        onChange={handleClick}
      />
    </form>
  );
}

export default SearchBar;
