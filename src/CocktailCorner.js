import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

function CocktailCorner() {
  const [drinkPic, setDrinkPic] = useState([])
  const [drinkName, setDrinkName] = useState([])
  const [drinkInst, setDrinkInst] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [ingredientList, setIngredientList] = useState([])

  useEffect(() => displayCocktail, [])

  function displayCocktail() {
    fetch('https://thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((randoCocktail) => {
        let cocktailName = randoCocktail.drinks[0].strDrink
        let cocktailPic = randoCocktail.drinks[0].strDrinkThumb
        let cocktailInst = randoCocktail.drinks[0].strInstructions

        let singleCocktail = randoCocktail.drinks[0]

        setIsClicked(true)
        getTheIngredients(singleCocktail)
        setDrinkName(cocktailName)
        setDrinkPic(cocktailPic)
        setDrinkInst(cocktailInst)
      })
  }

  function getTheIngredients(cocktail) {
    let ingredients = []
    for (let i = 1; i <= 15; i++) {
      if (cocktail[`strIngredient${i}`] != null) {
        ingredients.push(cocktail[`strIngredient${i}`])
      }
    }

    setIngredientList(ingredients)
  }
  console.log(ingredientList)

  return (
    <div className="card text-center">
      <div className="card-header">Cocktail Corner</div>
      <div className="card-body">
        <h4>Wanna Mix It Up</h4>
        <p>
          Discover something brand new. And <i>mix</i> it up a little? Click the
          button to find a new drink.
        </p>
        <h4 className="card-title">{drinkName}</h4>
        <div>
          <div>
            {isClicked ? (
              <img
                id="cocktail-pic"
                src={drinkPic}
                alt="A Lovely Libation"
                className="cocktail"
              />
            ) : null}
          </div>
          {ingredientList.map((ingredient, index) => (
            <dl key={index}>
              <b>{ingredient}</b>
            </dl>
          ))}
          <p>{drinkInst}</p>
        </div>
        <Button id="drink-btn" onClick={displayCocktail}>
          Cocktail Corner Commence
        </Button>
      </div>
    </div>
  )
}
export default CocktailCorner
