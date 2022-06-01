import React, { useState } from 'react'

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

  return (
    <div>
      <form id="local-breweries" onSubmit={handleSubmit}>
        <label className="yourZip">Enter Zip</label>
        <input type="text" onChange={handleZipInput} value={userEntry} />
        <button type="submit">GO</button>
      </form>

      <ul id="pub-list">
        {breweryReturn.map((brewery) => (
          <li key={brewery.id}>
            {brewery.name} -●- {brewery.street}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LocalPubs
