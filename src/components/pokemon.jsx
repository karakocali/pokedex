import { useEffect, useState } from "react";
import Axios from "axios";
import "./pokemon.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokeDetails, setPokeDetails] = useState([]);
  const [originalPokeDetails, setOriginalPokeDetails] = useState([]);

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => {
      // get the first 20 pokemon
      setPokemon(res.data.results);
    });
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await Promise.all(
        pokemon.map(async (poke) => {
          const response = await Axios.get(poke.url);
          return response.data;
        })
      );
      setPokeDetails(details);
      setOriginalPokeDetails(details);
    };
    fetchDetails();
  }, [pokemon]);

  const search = (e) => {
    const search = e.target.value.trim();
    const filtered = originalPokeDetails.filter((poke) => {
      return poke.name.toLowerCase().includes(search.toLowerCase());
    });
    if (search === "") {
      setPokeDetails(originalPokeDetails);
    } else {
      setPokeDetails(filtered);
    }
  };

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search Pokemon"
        onChange={search}
        className="search"
      />

      <div className="poke">
        {pokeDetails.map((poke, id) => {
          const sinif = poke.types[0].type.name;
          return (
            <div className="main" key={id}>
              <div className="card" key={id}>
                <div className={`${sinif} xx`}>
                  <img
                    className="image"
                    src={poke.sprites.front_default}
                    alt={poke.name}
                  />
                  <h1>{poke.name}</h1>
                  <h3>Height: {poke.height}</h3>
                  <h3>Weight: {poke.weight}</h3>
                  <h3>Abilities: {poke?.abilities[0]?.ability?.name}</h3>
                  <h3>Abilities: {poke?.abilities[1]?.ability?.name}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;
