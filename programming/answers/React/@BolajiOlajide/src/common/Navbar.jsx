import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return <nav className="navigation">
    <Link to="/">Home</Link>
  </nav>
}

export default Navbar;
