import React, { useState } from 'react';

// components
import Layout from '../common/Layout';

// utils
import { getCharacterFrequency } from '../utils/getCharacterFrequency';
import { loveCalculatorSum } from '../utils/loveCalculatorSum';

function LoveCalculator({ setPage }) {
  const [firstName, setFirstName] = useState('');
  const [crushName, setCrushName] = useState('');
  const [lovePercentage, setLovePercentage] = useState('');

  const calculateLove = () => {
    const characterFrequency = getCharacterFrequency(
      `${firstName.toLowerCase()}loves${crushName.toLowerCase()}`
    );
    const lovePercentage = loveCalculatorSum(characterFrequency);
    setLovePercentage(lovePercentage);
  };

  return (
    <Layout setPage={setPage}>
      <input
        type="text"
        name="first name"
        id="name1"
        placeholder="Enter your name..."
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />
      <input
        type="text"
        name="first name"
        id="name1"
        placeholder="Enter your crush's name..."
        value={crushName}
        onChange={event => setCrushName(event.target.value)}
      />
      {lovePercentage && <p>The love percentage is {lovePercentage}%</p>}
      <button type="button" onClick={calculateLove}>
        Calculate Love Percentage
      </button>
    </Layout>
  );
}

export default LoveCalculator;
