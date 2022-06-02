import React, { useState, useEffect } from "react";
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
        </div>
      </div>
    </>
  );
}

export default RandomBev;
