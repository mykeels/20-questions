import React, { useState, Fragment } from 'react';

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

  const question = (
    <Fragment>
      <p>
        Ask the user to enter a salary amount.<br />
        If the salary is &lt; 50000, output "Basic Earner".<br />
        Else, if the salary is less than 200,000, output "Mid Earner".<br />
        Else, output "High Earner".
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#12-salary-classifier";

  return <Layout question={question} link={link}>
    <input type="number" value={salary} onChange={calcSalary} min={0} />
    {earnLevel && <p>{earnLevel}</p>}
  </Layout>
}

export default SalaryClassifier;
