import React from 'react';

// common components
import Navbar from './Navbar';
import Question from './Question';


function Layout({ children, question, link }) {
  return <div className="layout-container">
    <Navbar />
    <Question question={question} link={link} />
    <div className="layout">{children}</div>
  </div>;
}

export default Layout;
