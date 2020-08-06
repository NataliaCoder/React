import React, { useState } from "react";

const CaughtPokemon = (props) => {
    const [totalCaught, setTotalCaught] = useState(0);
  
  function incrementTotal(){
    setTotalCaught(totalCaught+1);
  }
    return (
      <div>
    <button onClick={incrementTotal}>Click me</button>
    <p>Caught {totalCaught} Pokemon on {props.date}</p>
    </div>
    )
    }

  export default CaughtPokemon;