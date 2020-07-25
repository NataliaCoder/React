import React from "react";

const Logo = (props) => {
    console.log(props);
    return (
    <header>
   <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="bird"></img>
   <h1>Welcome to the {props.appName}</h1>
   </header>
    )
  }

  export default Logo;