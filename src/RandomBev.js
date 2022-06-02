import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function RandomBev() {
    const [drinkFacts, setDrinkFacts] = useState({})

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers/random')
            .then((r) => r.json())
            .then((drinkFacts) => setDrinkFacts(drinkFacts[0]))
    }, [])

    function newDrink() {
        fetch('https://api.punkapi.com/v2/beers/random')
        .then((r) => r.json())
        .then((drinkFacts) => setDrinkFacts(drinkFacts[0]))
    }

    return <>
        <div className="card text-center">
            <div className="card-header">
                Drink of the Day
            </div>
            <div className="card-body">
                <h4 className="card-title">A Beer and a Bite</h4>
                <p className="card-text">Need some inspiration? Or just looking for something different? Look no futher. Click the new beverage button below to get started. Plenty of new drinks await!</p>
                <div className="new-bev">
                    <div className="new-bev-name">
                    <h5>{drinkFacts.name}</h5>
                    </div>
                    <img src={drinkFacts.image_url} className="randomimg" alt="Close your eyes and think of a nice cold glass with a wonderfuly tasting liqiud! What does it taste like? Well I'm glad you asked." />
                    <div className="drink-facts">
                        <h5>Drink Description:</h5>
                        <p>{drinkFacts.description}</p>
                    </div>
                    <div className="bites-part">
                        <h5>Suggested Bites:</h5>
                        <ul>
                            {drinkFacts?.food_pairing?.map((pairing) => <li key={pairing}>{pairing}</li>)}
                        </ul>
                    </div>
                </div>
                <Button className="button" onClick={newDrink}>Discover More</Button>
            </div>
=======
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import ListingCard from "./ListingCard";

function RandomBev() {
  const [drinkCard, setDrinkCard] = useState({
    name: "",
    description: "",
    rating: "★★★★★",
    abv: "",
    image: "",
  });

  useEffect(fetchRandomBev, []);

  function fetchRandomBev() {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((r) => r.json())
      .then((randomDrink) => {
        const newDrink = {
          name: randomDrink[0].name,
          description: randomDrink[0].description,
          rating: "★★★★★",
          abv: randomDrink[0].abv,
          image: randomDrink[0].image_url,
        };
        setDrinkCard(newDrink);
      });
  }

  return (
    <>
      <div className="card text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h4 className="card-title">Drink of the Day</h4>
          <p className="card-text">
            Need some inspiration? Or just looking for something different? Look
            no futher. Click the new beverage button below to get started.
            Plenty of new drinks await!
          </p>
          <div className="new-bev">
            <ListingCard
              name={drinkCard.name}
              description={drinkCard.description}
              rating={drinkCard.rating}
              abv={drinkCard.abv}
              image={drinkCard.image}
            />
            {/* new beverge info goes here! maybe we also generate a random image?
            <img
              src={require("./testing-img/test-image.jpg")}
              className="testingimg"
              alt="just-a-test"
            /> */}
          </div>
          <Button onClick={fetchRandomBev} className="button">
            New beverage!
          </Button>
>>>>>>> main
        </div>
      </div>
    </>
  );
}

export default RandomBev;
