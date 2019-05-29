import React from 'react'

function Navbar({ setPage }) {
  return <nav className="navigation">
    <span onClick={() => setPage('home')}>Go Home!</span>
  </nav>
}

export default Navbar;
