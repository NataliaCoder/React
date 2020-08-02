import React, { useState } from "react";

const CaughtPokemon = (props) => {
    const [count, totalCaught] = useState(0);
  
  function incrementTotal(){
    totalCaught(count+1);
  }
    return (
      <div>
    <button onClick={incrementTotal}>Click me</button>
    <p>Caught {count} Pokemon on {props.date}</p>
    </div>
    )
    }

  export default CaughtPokemon;