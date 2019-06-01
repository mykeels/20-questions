import React, { useState } from 'react';

// components
import Layout from '../common/Layout';


function BaseNConverter({ setPage }) {
  const [number, setNumber] = useState('');
  const [base, setBase] = useState('');
  const [converted, setConverted] = useState(null);

  const reverseString = (str) => {
    return str
      .split("")
      .reverse()
      .join("");
  }

  const convertToBase = () => {
    const numericBase = Number(base);
    let remainder = 0
    let newNumber = number;
    let final = ''

    while (newNumber > 0) {
      remainder = newNumber % numericBase;
      newNumber = Math.floor(newNumber / numericBase);
      final += String(remainder);
    }

    setConverted(reverseString(final))
  }

  return <Layout setPage={setPage}>
    <label>Number</label>
    <input type="number" value={number} onChange={({target}) => setNumber(target.value)} min={0} />
    <br />
    <label>Base</label>
    <input type="number" value={base} onChange={({target}) => setBase(target.value)} min={0} />
    <br />
    <button onClick={convertToBase}>Convert</button>
    <br />
    {converted && <p>Digital Equivalent: {converted}</p>}
  </Layout>
}

export default BaseNConverter;
