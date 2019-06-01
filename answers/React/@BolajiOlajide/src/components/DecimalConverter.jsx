import React, { useState } from 'react';

// components
import Layout from '../common/Layout';


function DecimalConverter({ setPage }) {
  const [number, setNumber] = useState('');
  const [base, setBase] = useState('');
  const [converted, setConverted] = useState(null);

  const convertToBase = () => {
    const numericBase = Number(base);
    const splitNumber = String(number).split('').reverse();
    let total = 0

    splitNumber.forEach((digit, index) => {
      const cur = Number(digit) * (numericBase ** index);
      total += cur
    })

    setConverted(total)
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

export default DecimalConverter;
