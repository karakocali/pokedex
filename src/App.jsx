import { Component, useState } from "react";
import Pokemon from "./components/pokemon";
import "./App.css";
import Header from "./components/header";
function App() {
  return (
    <div className="App">
      <header> POKEDEX</header>
      <div>
        <Header />
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
