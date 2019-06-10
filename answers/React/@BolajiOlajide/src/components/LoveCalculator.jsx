import React, { useState } from 'react';

import Layout from '../common/Layout';

function LoveCalculator({ setPage }) {
  const [firstName, setFirstName] = useState('');
  const [crushName, setCrushName] = useState('');

  const calculateLove = () => {
    const concatenatedNames = `${firstName}${crushName}`;
    console.log(concatenatedNames, 'concatenate');
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
      <button type="button" onClick={calculateLove}>
        Calculate Love
      </button>
    </Layout>
  );
}

export default LoveCalculator;
