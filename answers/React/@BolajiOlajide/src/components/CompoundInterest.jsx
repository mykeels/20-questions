import React, { useState } from 'react';

// components
import Layout from '../common/Layout';

// utils
import { generateUniqueKey } from '../utils/generateUniqueKey';


function CompoundInterest({ setPage }) {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [interestDetails, setInterestDetails] = useState(null);

  const computeInterestDetails = () => {
    const simpleInterest = ((principal * time * rate) / 100);
    let compoundInterest = [
      <p key={generateUniqueKey()}>Compound Interest</p>
    ];

    for (let i = 0; i < time; i++) {

    }
    setInterestDetails([
      <span key={generateUniqueKey()}>Simple Interest: {simpleInterest}</span>,
      ...compoundInterest
    ])
  }

  return <Layout setPage={setPage}>
    <label>Principal:</label>
    <input type="number" value={principal} onChange={({target}) => setPrincipal(target.value)} />
    <br />
    <label>Rate: (X / 100)</label>
    <input type="number" value={rate} onChange={({target}) => setRate(target.value)} />
    <br />
    <label>Time: (in number of years)</label>
    <input type="number" value={time} onChange={({target}) => setTime(target.value)} />
    <br />
    <button onClick={computeInterestDetails}>Calculate Compound Interest</button>
    <br />
    {interestDetails && <div>{interestDetails}</div>}
  </Layout>
}

export default CompoundInterest;
