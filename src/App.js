    import React from "react";
    import Logo from "./Logo"

    


    function App(){
      return (
      <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
      </div>
      )
    }

   const CaughtPokemon = () => {
     const date = new Date().toLocaleDateString();
     return <p>Caught 0 Pokemon on {date}</p>
   }

   const BestPokemon = () => {
     const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
     return (
     <div>
     <p>My favourite Pokemon is Squirtle</p>
     <ul>
       {abilities.map((name) => {
        return (
        <li>{name}</li>
      )
    })}
  
     </ul>
     </div>
     )
   }
   
   export default App;

    
