import React, { useState } from 'react';

// components
import Layout from '../common/Layout';
import Flex from '../common/Flex';

function Lottery({ setPage }) {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [thirdNumber, setThirdNumber] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isRight, setIsRight] = useState(false);

  const generateNumbers = () => {
    // TODO: Refactor lol!
    const firstGeneratedNumber = Math.floor(Math.random(2) * 10);
    const secondGeneratedNumber = Math.floor(Math.random(2) * 10);
    const thirdGeneratedNumber = Math.floor(Math.random(2) * 10);

    setFirstNumber(firstGeneratedNumber);
    setSecondNumber(secondGeneratedNumber);
    setThirdNumber(thirdGeneratedNumber);
    setVisible(true);

    if (
      firstGeneratedNumber === 7 ||
      secondGeneratedNumber === 7 ||
      thirdGeneratedNumber === 7
    ) {
      setIsRight(true);
    } else {
      setIsRight(false);
    }
  };

  return (
    <Layout setPage={setPage}>
      <button onClick={generateNumbers}>Press me!</button>
      {visible && (
        <div>
          <Flex>
            <h3 style={{ margin: "0 1rem" }}>{firstNumber}</h3>
            <h3 style={{ margin: "0 1rem" }}>{secondNumber}</h3>
            <h3 style={{ margin: "0 1rem" }}>{thirdNumber}</h3>
          </Flex>
          {isRight ? (
            <span>Congratulations!</span>
          ) : (
            <span>Try again! Better luck next time.</span>
          )}
        </div>
      )}
    </Layout>
  );
}

export default Lottery;
