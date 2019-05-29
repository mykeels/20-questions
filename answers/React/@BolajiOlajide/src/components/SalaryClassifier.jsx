import React, { useState } from 'react';

// components
import Layout from '../common/Layout';


function SalaryClassifier({ setPage }) {
  const [salary, setSalary] = useState(0);
  const [earnLevel, setEarnLevel] = useState('');

  const calcSalary = ({ target: { value } }) => {
    setSalary(value);

    if (Number(value) < 50000) {
      setEarnLevel('Basic Earner')
    } else if (Number(salary) < 200000) {
      setEarnLevel('Mid Earner')
    } else {
      setEarnLevel('High Earner')
    }
  }

  return <Layout setPage={setPage}>
    <input type="number" value={salary} onChange={calcSalary} min={0} />
    {earnLevel && <p>{earnLevel}</p>}
  </Layout>
}

export default SalaryClassifier;
