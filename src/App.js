   import React from "react";
   import Logo from "./Logo";
   import BestPokemon from "./BestPokemon";
   import BestPokemonFetcher from "./BestPokemon"
   import CaughtPokemon from "./CaughtPokemon";

    const App = () => {

      function logWhenClicked() {
        console.log("It was clicked!");
      }
      return (
      <div>
        <Logo appName="Pokedex" handleClick={logWhenClicked} />
 
        <BestPokemonFetcher />
        <CaughtPokemon date = {new Date().toLocaleDateString()} />

      </div>
      )
    }
   
   export default App;

    
