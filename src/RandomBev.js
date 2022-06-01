import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function RandomBev() {
    return <>
        <div className="card text-center">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h4 className="card-title">Drink of the Day</h4>
                <p className="card-text">Need some inspiration? Or just looking for something different? Look no futher. Click the new beverage button below to get started. Plenty of new drinks await!</p>
                <div className="new-bev">
                    new beverge info goes here! maybe we also generate a random image?
                <img src={require("./testing-img/test-image.jpg")} className="testingimg" alt="just-a-test" />
                </div>
                <Button className="button">New beverage!</Button>
            </div>        
        </div>
    </>
}

export default RandomBev;