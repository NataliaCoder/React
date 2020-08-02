import React, { useState, useEffect } from "react";

const BestPokemonFetcher = () => { 

  const [bestPokemon]= useState({});
  
  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/1/`
    )
      .then((res) => res.json())
      .then((data) => bestPokemon(data));
  }, []);
  
  if (!bestPokemon) {
    return null;
  } else {
    return <BestPokemon pokemon={bestPokemon} />
  }
}

const BestPokemon = (props) => {

  return (
  <div>
  <p>My favourite Pokemon is Squirtle</p>
  <ul>
    {props.abilities.map((name) => {
     return (
     <li>{name}</li>
     )
  })}
</ul>
</div>
)
}

export default BestPokemonFetcher;