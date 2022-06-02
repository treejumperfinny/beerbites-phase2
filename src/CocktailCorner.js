import React, { useState, useEffect } from 'react'

function CocktailCorner() {
  const [drinkPic, setDrinkPic] = useState([])
  const [drinkName, setDrinkName] = useState([])

  //   useEffect(() => {
  //     fetch('https://thecocktaildb.com/api/json/v1/1/random.php')
  //       .then((response) => response.json())
  //       .then((randoCocktail) => {
  //         let cocktailName = randoCocktail.drinks[0].strDrink
  //         let cocktailPic = randoCocktail.drinks[0].strDrinkThumb

  //         setDrinkName(cocktailName)
  //         setDrinkPic(cocktailPic)
  //       })
  //   }, [])
  useEffect(() => displayCocktail, [])
  function displayCocktail() {
    fetch('https://thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((randoCocktail) => {
        let cocktailName = randoCocktail.drinks[0].strDrink
        let cocktailPic = randoCocktail.drinks[0].strDrinkThumb

        setDrinkName(cocktailName)
        setDrinkPic(cocktailPic)
      })
  }
  console.log(drinkName)
  return (
    <div>
      <h3 id="cocktail">{drinkName}</h3>
      <button id="drink-btn" onClick={displayCocktail}>
        Cocktail
      </button>
      <div>
        <img id="cocktail-pic" src={drinkPic} alt="A Lovely Libation"></img>
      </div>
    </div>
  )
}
export default CocktailCorner
