import React, { useState, useEffect } from "react";
import "./App.css";
//Importing Axios to do a GET to our API
import axios from "axios";
//Importing the Card and Header Components I built out for y'all
import Header from './Components/Header/Header'
import CardGrid from './Components/Cards/CardGrid'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the Rick & Morty API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //Setting state for our Characters
  const [character, setCharacter] = useState();

  //Using a useEffect hook to fetch the characters from the API

  useEffect(() => {
    const fetchCharacter = async () => {
      return await axios.get(
        "https://rickandmortyapi.com/api/character/"
      );
    };

    fetchCharacter()
      .then(res => {
        setCharacter(res.data);
      })
      .catch(err => {
        console.log("Error has occurred: ", err);
      });
  });


  return (
    <div className="App">
      <Header />
      {character ? <CardGrid character={character.results} /> : null}
    </div>
  );
};

export default App;