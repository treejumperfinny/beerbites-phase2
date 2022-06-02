import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';

function TastingNotes() {
    return <>
        <Card>
        <div className="card text-center">
            <div className="card-header">
                Tasting Notes
            </div>
            <div className="card-body">
                <h4 className="card-title">Beverage Review</h4>
                <p className="card-text">Want to remember an amazing brew and brat combo? Or do you never want to try another Dogfishhead 90 minute IPA again? Let's get those thoughts written down!</p>
                <div className="new-bev">
                    <Form.Group>
                        <div className="form-group">
                            <label>Drink Name?</label>
                            <input type="text" className="form-control" name="name" placeholder="Yuengling Black and Tan" /></div>
                        <div className="form-group">
                            <label>Type of Beverage?</label>
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
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Taste rating</label>
                            <input className="form-control" type="number" max="10" min="-10" />
                        </div>
                        <div className="form-group">
                            <label >Thoughts. Notes.</label>
                            <textarea className="form-control" rows="5"></textarea>
                        </div>

                    </Form.Group>
                </div>
                <Button className="mb-3 button" >Take Note</Button>
            </div>
        </div>
        </Card>
    </>
}

export default TastingNotes;