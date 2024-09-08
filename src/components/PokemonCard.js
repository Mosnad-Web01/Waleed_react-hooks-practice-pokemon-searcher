// src/PokemonCard.js
import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [showFront, setShowFront] = useState(true);

  const toggleSprite = () => {
    setShowFront(!showFront);
  };

  return (
    <Card onClick={toggleSprite}>
      <div className="image">
        <img
          alt={pokemon.name}
          src={showFront ? pokemon.sprites.front : pokemon.sprites.back}
        />
      </div>
      <div className="content">
        <div className="header">{pokemon.name}</div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat red" />
          {pokemon.hp} hp
        </span>
      </div>
    </Card>
  );
}

export default PokemonCard;
