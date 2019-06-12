import React, { useState, Fragment } from 'react';

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

  const question = (
    <Fragment>
      <p>
        Write a program to convert from base n to decimal (base 10).<br />
        Request the value of n.<br />
        Request the number value (integer).<br />
        Convert to base 10, and output the result.
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#16-convert-to-decimal";

  return <Layout question={question} link={link}>
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
