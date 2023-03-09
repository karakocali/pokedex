import axios from "axios";
import React, { useEffect } from "react";
import "./pokemon.css";
function Pokemon({ url, name }) {
  const [pokemon, setPokemon] = React.useState({});

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(url);
      setPokemon(data);
    }
    fetchData();
  }, [url]);

  return (
    <div className="card">
      <div className="pokemon ">
        <h1>{name}</h1>
        <img src={pokemon?.sprites?.front_default} alt={name} loading="lazy" />
        <div>
          <h3>Abilities</h3>
          <ul>
            {pokemon.abilities?.map((ability, i) => {
              return <li key={i}>{ability.ability.name}</li>;
            })}
          </ul>
          {}
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
