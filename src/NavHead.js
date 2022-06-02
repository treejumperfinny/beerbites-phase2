import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavHead() {
  return (
    <>
      <div className="navi">

        <Navbar bg="bbcolors" variant="dark" fixed="top" className="logo" height="90px">

          <Navbar.Brand>
            <img
              src={require('./testing-img/bb-icon.png')}
              alt="logo"
              className="navimg"
            />
    
          </Navbar.Brand>
          <Nav>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/discover">
              Daily Discovery
            </Link>
            <Link className="nav-link" to="/tasting-notes">
              Tasting Notes
            </Link>
            <Link className="nav-link" to="/pubs">
              Local Brews
            </Link>
            <Link className="nav-link" to="/cocktails">
              Cocktail Corner
            </Link>
          </Nav>
        </Navbar>
      </div>
    </>
  ) 
}

export default NavHead;
