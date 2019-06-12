import React, { useState, useEffect, useCallback } from 'react';

// components
import Layout from '../common/Layout';
import Button from '../common/Button';

// utils
import { randomWords } from '../utils/randomwords';


function TypeReverse({ setPage }) {
  const [word, setWord] = useState("");
  const [randomWord, setRandomWord] = useState("");
  const [reverseRandomWord, setReverseRandomWord] = useState("");
  const [sign, showSign] = useState("❌");

  function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }

  const refresh = useCallback(() => {
    const randomWord = randomWords();
    setRandomWord(randomWord);
    setReverseRandomWord(reverseString(randomWord));
    setWord("");
  }, []);

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
    refresh();
  }, [refresh]);

  return (
    <Layout setPage={setPage}>
      <h3>Word: {randomWord}</h3>
      <input value={word} onChange={checkAndSaveInput} />
      <h3>{sign}</h3>
      <Button label="Refresh" onClick={() => refresh()} />
    </Layout>
  );
}

export default TypeReverse;
