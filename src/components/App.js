// src/App.js
import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon") // Updated URL
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  const addPokemon = (newPokemon) => {
    fetch("http://localhost:3001/pokemon", {
      // Correct POST URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => response.json())
      .then((addedPokemon) => setPokemon([...pokemon, addedPokemon]));
  };

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <PokemonPage
        pokemon={filteredPokemon}
        addPokemon={addPokemon}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;
