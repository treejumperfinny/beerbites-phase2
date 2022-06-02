import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Form } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function SearchBrews() {
  const [abv, setAbv] = useState([])

  const [beerImage, setBeerImage] = useState('')

  function handleAbv(e) {
    const abvSearch = e.target.value

    fetch(`https://api.punkapi.com/v2/beers?${abvSearch}&per_page=5`)
      .then((response) => response.json())
      .then((beers) => setAbv(beers))

    if (abvSearch === 'abv_lt=5.0') {
      setBeerImage(
        'https://cdn2.justwineapp.com/assets/article/2018/04/german-beer-styles-wheat-ale-weizen-weissbier-weizenbock.jpg'
      )
    } else if (abvSearch === 'abv_gt=5.0&abv_lt=7.0') {
      setBeerImage(
        ' https://www.brewer-world.com/wp-content/uploads/2021/04/5Things-Header.jpg'
      )
    } else if (abvSearch === 'abv_gt=7.0') {
      setBeerImage(
        'https://cdn.craftbeer.com/wp-content/uploads/IPAs-HopCones_1200pix.jpg'
      )
    }
  }
  const beerName = abv.map((beer) => beer.name)
  const beerDescription = abv.map((beer) => beer.description)

  return (
    <div id="parent">
      <Form.Select
        onChange={handleAbv}
        id="selection"
        aria-label="Default select example"
      >
        <option>Beers By ABV</option>
        <option value="abv_lt=5.0">Light</option>
        <option value={'abv_gt=5.0&abv_lt=7.0'}>Medium</option>
        <option value="abv_gt=7.0">Heavy</option>
      </Form.Select>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={beerImage} />
        <Card.Body>
          <Card.Title>{beerName[0]}</Card.Title>
          <Card.Text>{beerDescription[0]}</Card.Text>
        </Card.Body>
      </Card>

      {/* <Row xs={1} md={1} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={beerImage} />
              <Card.Body>
                <Card.Title>{beerName[0]}</Card.Title>
                <Card.Text>{beerDescription[0]}</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>CHANGE</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
    </div>
  )
}
export default SearchBrews
