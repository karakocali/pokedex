import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = React.useState({});

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(data);
    }
    fetchData();
  }, []);

  return (
    <div className="card">
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites?.front_default} loading="lazy" />
      <div>
        <h3>Abilities</h3>
        <ul>
          {pokemon.abilities?.map((ability, i) => {
            return <li key={i}>{ability.ability.name}</li>;
          })}
          <li> kg : {pokemon?.weight}</li>
          <li> boy : {pokemon?.height}</li>
        </ul>
        {}
      </div>
    </div>
  );
}

export default PokemonPage;
