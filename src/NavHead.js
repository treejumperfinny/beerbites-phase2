import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavHead() {
  return <>
    <div className='navi'>
      <Navbar bg="bbcolors" variant="dark" fixed="top" className='logo'>
        <Navbar.Brand>
          <img src={require("./testing-img/bb-icon.png")} alt="logo" className='navimg' />
          beerbites
        </Navbar.Brand>
        <Nav className="navi-text">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="home">Search Brews</Nav.Link>
          <Nav.Link href="home">Tasting Notes</Nav.Link>
          <Nav.Link href="home">Local Finds</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  </>
};

export default NavHead;