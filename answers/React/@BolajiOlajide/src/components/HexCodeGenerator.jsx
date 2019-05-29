import React from 'react';

// components
import Layout from '../common/Layout';


function HexCodeGenerator({ setPage }) {
  const generateHex = () => {
    const MAX = 16;
    return Math.random().toString(MAX).slice(2, 8);
  }

  const hexCode = generateHex();

  return <Layout setPage={setPage}>
    <p>#{hexCode}</p>
    <div style={{ width: '20px', height: '20px', backgroundColor: `#${hexCode}` }} />
  </Layout>
}

export default HexCodeGenerator;
