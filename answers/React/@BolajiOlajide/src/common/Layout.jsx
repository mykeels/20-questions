import React from 'react';
import Navbar from './Navbar';


function Layout({ children, setPage }) {
  return <div className="layout-container">
    <Navbar setPage={setPage} />
    <div className="layout">{children}</div>
  </div>;
}

export default Layout;
