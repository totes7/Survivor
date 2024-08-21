import React from "react";
import "./Characters.css";

const characters = require.context("../images/characters", true);

const charactersList = characters
  .keys()
  .map((character) => characters(character));

const sortedCharactersList = charactersList.slice().sort((a, b) => {
  const getNumberFromPath = (path) => {
    const fileName = path.split("/").pop();
    return parseInt(fileName.split(".")[0], 10);
  };

  return getNumberFromPath(a) - getNumberFromPath(b);
});

function Characters() {
  return (
    <div className="characters">
      {sortedCharactersList.map((character, index) => (
        <img key={index} src={character} alt={`character-${index}`} />
      ))}
    </div>
  );
}

export default Characters;
