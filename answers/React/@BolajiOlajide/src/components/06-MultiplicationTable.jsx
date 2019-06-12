import React, { Fragment } from 'react';

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

  const question = (
    <Fragment>
      <p>
        Using a for/while loop, write a program that prints
        out a simple multiplication from 2 - 12.
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#6-multiplication-table";

  return <Layout question={question} link={link}>
    <Grid cols={11} rows={12}>
      {generateGrid()}
    </Grid>
  </Layout>
}

export default MultiplicationTable;
