import React from "react";
import "./styles.css";
import PokeCard from "./components/PokeCard";
import { mockPokemonData as pokeData } from "./mock/pokeData";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to your second mini challenge!</h1>
      <PokeCard
        title={pokeData.name}
        spritesSrc={Object.values(pokeData.sprites)}
        videoLink={pokeData.video}
      />
    </div>
  );
}
