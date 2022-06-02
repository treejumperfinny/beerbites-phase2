import React from "react";

function ListingCard({ name, description, image, rating, abv }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{rating}</h2>
      <img className="listing-image" src={image} alt={name} />
      <p>ABV: {abv}</p>
      <p>{description}</p>
    </div>
  );
}

export default ListingCard;