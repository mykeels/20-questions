import React from 'react';

// components
import Layout from '../common/Layout';


function RGBColorGenerator({ setPage }) {
  const generateRGB = () => {
    const MAX = 256;
    return Math.floor(Math.random() * Math.floor(MAX));
  }

  const colorCode = `rgb(${generateRGB()},${generateRGB()},${generateRGB()})`

  return <Layout setPage={setPage}>
    <p>{colorCode}</p>
    <div style={{ width: '20px', height: '20px', backgroundColor: colorCode }} />
  </Layout>
}

export default RGBColorGenerator;
