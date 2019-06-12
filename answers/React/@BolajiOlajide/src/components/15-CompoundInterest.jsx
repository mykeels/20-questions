import React, { useState, Fragment } from 'react';

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
    let compoundInterestDetails = [
      <p key={generateUniqueKey()}>Compound Interest</p>
    ];
    let newPrincipal = principal;

    for (let i = 0; i < time; i++) {
      const compoundInterest = ((newPrincipal * rate) / 100);
      newPrincipal = Number(newPrincipal) + Number(compoundInterest)
      compoundInterestDetails.push(
        <p key={generateUniqueKey()}>
          Year {i + 1}: {newPrincipal}
        </p>
      )
    }
    setInterestDetails([
      <span key={generateUniqueKey()}>Simple Interest: {simpleInterest}</span>,
      ...compoundInterestDetails
    ])
  }

  const question = (
    <Fragment>
      <p>
        Request the Principal.<br />
        Request the Rate.<br />
        Request the Time in Years.<br />
        Calculate and output the simple interest. (P * R * T / 100).<br/>
        For each year, calculate and output the compound interest.<br />
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#15-compound-interest-calculator";

  return <Layout question={question} link={link}>
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
