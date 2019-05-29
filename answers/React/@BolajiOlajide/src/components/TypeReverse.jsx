import React, { useState, useEffect } from 'react';

// components
import Layout from '../common/Layout';

// utils
import { randomWords } from '../utils/randomwords';


function TypeReverse({ setPage }) {
  const [word, setWord] = useState(null);
  const [randomWord, setRandomWord] = useState("");
  const [reverseRandomWord, setReverseRandomWord] = useState("");
  const [sign, showSign] = useState("❌");

  function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }

  const checkAndSaveInput = ({ target }) => {
    const newInput = target.value;
    setWord(newInput);
    if (newInput === reverseRandomWord) {
      showSign("✅");
    } else {
      showSign("❌");
    }
  };

  useEffect(() => {
    const randomWord = randomWords();
    setRandomWord(randomWord);
    setReverseRandomWord(reverseString(randomWord));
  }, []);

  return (
    <Layout setPage={setPage}>
      <h3>Word: {randomWord}</h3>
      <input value={word} onChange={checkAndSaveInput} />
      <h3>{sign}</h3>
    </Layout>
  );
}

export default TypeReverse;
