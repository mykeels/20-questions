import React, { useState, useEffect, useCallback, Fragment } from 'react';

// components
import Layout from '../common/Layout';
import Button from '../common/Button';


function HexCodeGenerator({ setPage }) {
  const [colorCode, setColorCode] = useState(null);
  const generateHex = () => {
    const MAX = 16;
    return Math.random().toString(MAX).slice(2, 8);
  }

  const refresh = useCallback(() => {
    const hexCode = generateHex();
    setColorCode(hexCode);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const question = (
    <Fragment>
      <p>
        Write a program that will output a random RGB color
        e.g. #fca048.
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#10-hex-color-generator";

  return <Layout question={question} link={link}>
    <p>#{colorCode}</p>
    <div style={{ width: '20px', height: '20px', backgroundColor: `#${colorCode}` }} />
    <Button label="Refresh" onClick={refresh} />
  </Layout>
}

export default HexCodeGenerator;
