import React from 'react';

// components
import Layout from '../common/Layout';
import Grid from '../common/Grid';

// utils
import { generateUniqueKey } from '../utils/generateUniqueKey';


function MultiplicationTable({ setPage }) {
  const generateGrid = () => {
    const result = [];
    for (let i = 1; i <= 12; i++) {
      const outer = []
      for (let j = 2; j <= 12; j++) {
        const key = generateUniqueKey();
        outer.push(<span key={key}>{i * j}</span>)
      }
      result.push(outer);
    }
    return result;
  }

  return <Layout setPage={setPage}>
    <Grid cols={11} rows={12}>
      {generateGrid()}
    </Grid>
  </Layout>
}

export default MultiplicationTable;
