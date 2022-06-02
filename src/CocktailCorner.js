import React, { useState, useEffect } from "react";

function CocktailCorner() {
  const [drinkPic, setDrinkPic] = useState([]);
  const [drinkName, setDrinkName] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((response) => response.json())
      .then((randoBeer) => {
        console.log(randoBeer);
      });
  });

  useEffect(() => displayCocktail, []);

  function displayCocktail() {
    fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((randoCocktail) => {
        let cocktailName = randoCocktail.drinks[0].strDrink;
        let cocktailPic = randoCocktail.drinks[0].strDrinkThumb;

        setDrinkName(cocktailName);
        setDrinkPic(cocktailPic);
      });
  }

  return (
    <div>
      <button id="drink-btn" onClick={displayCocktail}>
        Cocktail
      </button>
      {drinkName}
      <div>
        <img id="cocktail-pic" src={drinkPic} alt="A Lovely Libation"></img>
      </div>
    </div>
  );
}
export default CocktailCorner;
