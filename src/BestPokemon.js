import React from "react";

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

export default BestPokemon;