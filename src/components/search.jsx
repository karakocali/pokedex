import React, { useEffect } from "react";

function Search({ pokemons, setFilterPokemons }) {
  const [searchValue, setSearchValue] = React.useState("");

  function handleChange(e) {
    let value = e.target.value;
    setSearchValue(value);
  }

  useEffect(() => {
    let filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.includes(searchValue);
    });
    setFilterPokemons(filteredPokemons);
  }, [searchValue, pokemons, setFilterPokemons]);

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
