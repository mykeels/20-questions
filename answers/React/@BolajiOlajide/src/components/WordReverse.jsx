import React, { useState } from 'react';

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

  return (
    <Layout setPage={setPage}>
      <input value={word} onChange={({ target }) => setWord(target.value)} />
      {word && <h3>{reverseString(word)}</h3>}
    </Layout>
  );
}

export default WordInReverse;
