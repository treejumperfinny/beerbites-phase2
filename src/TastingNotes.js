import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form } from "react-bootstrap";
import ListingCard from "./ListingCard";

function TastingNotes() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    rating: "",
    abv: "",
    image:
      "https://learn.kegerator.com/wp-content/uploads/2017/04/milk-stout.jpg",
  });

  const [cards, setCards] = useState([
    {
      name: "",
      description: "",
      rating: "",
      abv: "",
      image: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/listings")
      .then((r) => r.json())
      .then((data) => setCards(data));
  }, []);

  const displayCards = cards.map((card) => {
    const { name, description, image, rating, abv } = card;
    return (
      <ListingCard
        key={name}
        name={name}
        description={description}
        image={image}
        rating={rating}
        abv={abv}
      />
    );
  });

  const handleInput = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // convert rating number to stars
    let ratingStars;
    if (formData.rating === "1") {
      ratingStars = "★";
    }
    if (formData.rating === "2") {
      ratingStars = "★★";
    }
    if (formData.rating === "3") {
      ratingStars = "★★★";
    }
    if (formData.rating === "4") {
      ratingStars = "★★★★";
    }
    if (formData.rating === "5") {
      ratingStars = "★★★★★";
    }
    const submitData = { ...formData, rating: ratingStars };

    fetch("http://localhost:3001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
      .then((r) => r.json())
      .then((newListing) => setCards([...cards, newListing]));
  };

  return (
    <>
     <Card>
        <div className="card text-center">
          <div className="card-header">Tasting Notes</div>
          <div className="card-body">
            <h4 className="card-title">Beverage Review</h4>
            <p className="card-text">
              Want to remember an amazing brew and brat combo? Or do you never
              want to try another Dogfishhead 90 minute IPA again? Let's get
              those thoughts written down!
            </p>
            <div className="new-bev">
              <form onSubmit={handleSubmit}>
                <Form.Group>
                  <div className="form-group">
                    <label>Drink Name?</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Yuengling Black and Tan"
                      value={formData.name}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label>ABV?</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Alcohol By Volume Percentage"
                      name="abv"
                      min="0"
                      value={formData.abv}
                      onChange={handleInput}
                    />
                    {/* not sure if we'll need this again 
                    <select className="form-control" name="type">
                    <option>Ale</option>
                    <option>Lager</option>
                    <option>Porter</option>
                    <option>Stout</option>
                    <option>Blonde Ale</option>
                    <option>Brown Ale</option>
                    <option>Pale Ale</option>
                    <option>India Pale Ale</option>
                    <option>Wheat</option>
                    <option>Pilsner</option>
                    <option>Sour Ale</option>
                    <option>Other</option>
                  </select> */}
                  </div>
                  <div className="form-group">
                    <label>Taste rating</label>
                    <input
                      className="form-control"
                      type="number"
                      max="5"
                      min="1"
                      placeholder="Rate from 1-5 stars"
                      name="rating"
                      value={formData.rating}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label>Thoughts. Notes.</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Wow what a drink!"
                      name="description"
                      value={formData.description}
                      onChange={handleInput}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <Button className="mb-3 button" type="submit">
                      Take Note
                    </Button>
                  </div>
                </Form.Group>
              </form>
            </div>
          </div>
        </div>
      </Card>
      <Card>
      <div className="past-notes">
      <div className="card text-center">
          <div className="card-header">Previous Notes</div>
          <div className="card-body">
            <h4 className="card-title">Beverage Review</h4>
      <div>{displayCards}</div>
      </div>
      </div>
      </div>
      
      </Card>
    </>
  );
}

export default TastingNotes;
