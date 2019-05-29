import React, { useState } from 'react';

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

  return <Layout setPage={setPage}>
    <input type="number" value={salary} onChange={calcTax} min={0} />
    {tax && <p>{tax}</p>}
  </Layout>
}

export default TaxClassifier;
