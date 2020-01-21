// YOU DO NOT NEED TO CHANGE ANYTHING IN THIS FILE.

import React from "react";
import Card from "./Card";

//We're mapping over each Character in the API data we're getting, and returning that character
// to their own Card, over and over and over!
// "We've got CLONES, MORTY!"

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