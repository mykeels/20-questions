import React, { useState, useEffect, useCallback, Fragment } from 'react';

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

  const question = (
    <Fragment>
      <p>
        Output a random word. Ask the user to type in the reverse.<br />
        - If the user is correct, output ✅<br />
        - Else, output ❌
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#4-type-in-reverse";

  return (
    <Layout question={question} link={link}>
      <h3>Word: {randomWord}</h3>
      <input value={word} onChange={checkAndSaveInput} />
      <h3>{sign}</h3>
      <Button label="Refresh" onClick={() => refresh()} />
    </Layout>
  );
}

export default TypeReverse;
