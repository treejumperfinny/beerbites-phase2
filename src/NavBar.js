import React from 'react'

import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header>
      <nav>
        <Link to="/" style={{ borderBottom: 'none' }}>
          <h1 className="branding">
            <span className="logo">{'//'}</span>
            Project Showcase
          </h1>
        </Link>
        <div className="navigation">
          <NavLink exact className="button" to="/pubs">
            Local Pubs
          </NavLink>
          <NavLink exact className="button" to="/cocktails">
            Cocktails
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
