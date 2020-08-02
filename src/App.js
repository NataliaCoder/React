   import React from "react";
   import Logo from "./Logo";
   import BestPokemon from "./BestPokemon";
   import BestPokemonFetcher from "./BestPokemon"
   import CaughtPokemon from "./CaughtPokemon";

    function App(){

      function logWhenClicked() {
        console.log("It was clicked!");
      }
      return (
      <div>
        <Logo appName="Pokedex" handleClick={logWhenClicked} />
        <BestPokemon abilities = {['Anticipation', 'Adaptability', 'Run-Away']} />
        <BestPokemonFetcher />
        <CaughtPokemon date = {new Date().toLocaleDateString()} />

      </div>
      )
    }
   
   export default App;

    
