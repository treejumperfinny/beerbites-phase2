import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function LocalPubs() {
  const [userEntry, setUserEntry] = useState('')
  const [breweryReturn, setBreweryReturn] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`https://api.openbrewerydb.org/breweries?by_postal=${userEntry}`)
      .then((response) => response.json())
      .then((cities) => setBreweryReturn(cities))
  }

  function handleZipInput(e) {
    setUserEntry(e.target.value)
  }

  return <>
    <div>
      <div className="card text-center">
        <div className="card-header">
          Local Breweries
        </div>
        <div className="card-body">
          <h4 className="card-title">Let's Go Out</h4>
          <p className="card-text">Tired of staying home? I totally understand. Let's get out and explore your city. Or are you visiting someplace new? That's cool too. We gotchu. Put in your zipcode and we will take you to awesome new flavors.</p>

          <form id="local-breweries" onSubmit={handleSubmit}>
            <label className="yourZip">Enter Zip</label>
            <input type="text" onChange={handleZipInput} value={userEntry} />
            <Button className="button" type="submit">Find A New Favorite</Button>
          </form>

          <div className="local-pubs">
          <ul id="pub-list">
          <h4>Breweries In Your Area:</h4>
            {breweryReturn.map((brewery) => (
              <li key={brewery.id}>
                {brewery.name} -●- {brewery.street}
              </li>
            ))}
          </ul>
          </div>

        </div>
      </div>
      </div>
    </>
}

    export default LocalPubs


