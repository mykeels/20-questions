import React from 'react';


function Question({ question, link }) {
  return <div className="question">
    <h3>Question:</h3>
    {question}
    <a href={link} target="_blank" rel="noopener noreferrer">Check it out!</a>
  </div>
}

export default Question;
