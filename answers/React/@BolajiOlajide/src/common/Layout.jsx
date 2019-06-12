import React from 'react';
import Navbar from './Navbar';


function Layout({ children }) {
  return <div className="layout-container">
    <Navbar />
    <div className="layout">{children}</div>
  </div>;
}

export default Layout;
