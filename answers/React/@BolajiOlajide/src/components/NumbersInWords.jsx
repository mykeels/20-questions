import React, { useState } from 'react';

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

  return <Layout setPage={setPage}>
    <input type="number" value={number} onChange={convertToWords} min={0} />
    {numberInWords && <p>{numberInWords}</p>}
  </Layout>
}

export default NumbersInWords;
