import React from "react";
import Card from "./Card";

const CardGrid = ({ character }) => {
  return (
    <div className="grid">
        {character.map((character, index) => {
          return <Card key={index} character={character} />;
        })}
    </div>
  );
};

export default CardGrid;