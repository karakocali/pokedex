import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import Pokemon from "../components/pokemon";
import Search from "../components/search";

const Dashboard = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filterPokemons, setFilterPokemons] = useState([]);
  async function fetchData() {
    let { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    setPokemons(data.results);

    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Search pokemons={pokemons} setFilterPokemons={setFilterPokemons} />
      <div className="App">
        {filterPokemons.map((pokemon, i) => {
          return (
            <Link
              to={
                "/pokemon/" +
                pokemon.url.split("/")[pokemon.url.split("/").length - 2]
              }
            >
              <Pokemon
                key={i}
                url={pokemon.url}
                name={pokemon.name}
                onClick={(e) => {}}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
