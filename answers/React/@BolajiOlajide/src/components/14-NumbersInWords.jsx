import React, { useState, Fragment } from 'react';

// components
import Layout from '../common/Layout';

// utils
import { numToWords } from '../utils/numToWords';

function NumbersInWords({ setPage }) {
  const [number, setNumber] = useState(0);
  const [numberInWords, setNumberInWords] = useState('');

  const convertToWords = ({ target: { value } }) => {
    setNumber(value);

    const numberWord = numToWords(value)
    setNumberInWords(numberWord)
  }

  const question = (
    <Fragment>
      <p>
        Ask the user to enter a number.<br />
        Print out the entered number in words.<br />
        E.g. 30,456 becomes "Thirty thousand, four hundred and fifty six".
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#14-number-in-words";

  return <Layout question={question} link={link}>
    <input type="number" value={number} onChange={convertToWords} min={0} />
    {numberInWords && <p>{numberInWords}</p>}
  </Layout>
}

export default NumbersInWords;
