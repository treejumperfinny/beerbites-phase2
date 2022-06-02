import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

import { Link, NavLink } from 'react-router-dom'

function NavHead() {
  return (
    <>
      <div className="navi">
        <Navbar bg="bbcolors" variant="dark" fixed="top" className="logo">
          <Navbar.Brand>
            <img
              src={require('./testing-img/bb-icon.png')}
              alt="logo"
              className="navimg"
            />
            beerbites
          </Navbar.Brand>

          <Nav>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/tasting-notes">
              Tasting Notes
            </Link>
            <Link className="nav-link" to="/">
              Search Brews
            </Link>
            <Link className="nav-link" to="/pubs">
              Local Brews
            </Link>

            <Link className="nav-link" to="/cocktails">
              Cocktails
            </Link>
          </Nav>
        </Navbar>
      </div>
    </>
  )
}

export default NavHead
