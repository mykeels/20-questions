import React, { useState, useEffect, useCallback, Fragment } from 'react';

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
  }, [refresh]);

  const question = (
    <Fragment>
      <p>
      Write a program that will output a random RGB color
      e.g. rgb(252, 160, 72).
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#9-rgb-color-generator";

  return <Layout question={question} link={link}>
    <p>{colorCode}</p>
    <div style={{ width: '20px', height: '20px', backgroundColor: colorCode }} />
    <Button label="Refresh" onClick={refresh} />
  </Layout>
}

export default RGBColorGenerator;
