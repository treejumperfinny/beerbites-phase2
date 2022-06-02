import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

function CocktailCorner() {
  const [drinkPic, setDrinkPic] = useState([])
  const [drinkName, setDrinkName] = useState([])

  useEffect(() => {
    fetch('https://thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((randoCocktail) => {
        let cocktailName = randoCocktail.drinks[0].strDrink
        let cocktailPic = randoCocktail.drinks[0].strDrinkThumb

        setDrinkName(cocktailName)
        setDrinkPic(cocktailPic)
      })
  }, [])
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

  return (
    <div className="card text-center">
    <div className="card-header">
        Cocktail Corner
    </div>
    <div className="card-body">
      <h4>Wanna Mix It Up</h4>
      <p>
        Discover something brand new. And <i>mix</i> it up a little? Click the button to find a new drink.
      </p>
      <h4 className="card-title">{drinkName}</h4>
      <div>
      <div>
        <img id="cocktail-pic" src={drinkPic} alt="A Lovely Libation" className='cocktail' />
      </div>
      </div> 
      <Button id="drink-btn" onClick={displayCocktail}>
        Cocktail Corner Commence
      </Button>
      </div>
    </div>
  )
}
export default CocktailCorner
