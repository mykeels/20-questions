import React, { useState, Fragment } from 'react';

// components
import Layout from '../common/Layout';


function TaxClassifier({ setPage }) {
  const [salary, setSalary] = useState(0);
  const [tax, setTax] = useState('');

  const calcTax = ({ target: { value } }) => {
    setSalary(value);

    if (Number(value) < 50000) {
      const tax = ((5 / 100) * value)
      setTax(`Tax: ${tax}`)
    } else if (Number(salary) < 200000) {
      const tax = ((10 / 100) * value)
      setTax(`Tax: ${tax}`)
    } else {
      const tax = ((15 / 100) * value)
      setTax(`Tax: ${tax}`)
    }
  }

  const question = (
    <Fragment>
      <p>
        Ask the user to enter a salary amount.<br />
        If the salary is &lt; 50,000, output Tax: 5 / 100 * salary.<br />
        Else, if the salary is less than 200,000, output Tax: 10 / 100 * salary.<br />
        Else, output Tax: 15 / 100 * salary.
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#13-tax-classifier";

  return <Layout question={question} link={link}>
    <input type="number" value={salary} onChange={calcTax} min={0} />
    {tax && <p>{tax}</p>}
  </Layout>
}

export default TaxClassifier;
