import React from "react";
import "./Characters.css";

function Characters() {
  const characters = require.context("../images/characters", true);

  const charactersList = characters
    .keys()
    .map((character) => characters(character));

  const getNumberFromPath = (path) => {
    const fileName = path.split("/").pop();
    return parseInt(fileName.split(".")[0], 10);
  };

  const filteredCharactersList = charactersList.filter((character) => {
    const number = getNumberFromPath(character);
    return number >= 20 && number <= 43;
  });

  const sortedFilteredCharactersList = filteredCharactersList.sort((a, b) => {
    return getNumberFromPath(a) - getNumberFromPath(b);
  });

  return (
    <div className="characters">
      {sortedFilteredCharactersList.map((character, index) => (
        <img key={index} src={character} alt={`character-${index}`} />
      ))}
    </div>
  );
}

export default Characters;
