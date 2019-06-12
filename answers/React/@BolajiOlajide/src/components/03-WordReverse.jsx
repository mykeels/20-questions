import React, { useState, Fragment } from 'react';

// components
import Layout from '../common/Layout';


function WordInReverse({ setPage }) {
  const [word, setWord] = useState(null);

  function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }

  const question = (
    <Fragment>
      <p>
        Ask the user to enter a word.<br/>
        Print out the word in reverse.
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#3-word-in-reverse"

  return (
    <Layout question={question} link={link}>
      <input value={word} onChange={({ target }) => setWord(target.value)} />
      {word && <h3>{reverseString(word)}</h3>}
    </Layout>
  );
}

export default WordInReverse;
