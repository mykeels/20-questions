import React, { useState, useEffect, useCallback } from 'react';

// components
import Layout from '../common/Layout';
import Button from '../common/Button';


function RGBColorGenerator({ setPage }) {
  const [colorCode, setColorCode] = useState(null);
  const generateRGB = () => {
    const MAX = 256;
    return Math.floor(Math.random() * Math.floor(MAX));
  }

  const refresh = useCallback(() => {
    const generatedCode = `rgb(${generateRGB()},${generateRGB()},${generateRGB()})`;
    setColorCode(generatedCode);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh])

  return <Layout setPage={setPage}>
    <p>{colorCode}</p>
    <div style={{ width: '20px', height: '20px', backgroundColor: colorCode }} />
    <Button label="Refresh" onClick={refresh} />
  </Layout>
}

export default RGBColorGenerator;
