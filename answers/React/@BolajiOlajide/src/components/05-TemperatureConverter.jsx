import React, { useState, Fragment } from 'react';

// components
import Layout from '../common/Layout';
import Flex from '../common/Flex';


function TemperatureConverter({ setPage }) {
  const [option, setOption] = useState(0);
  const [result, setResult] = useState("");
  const [temperature, setTemperature] = useState("");

  const convertToCelsius = temp => (temp - 32) * (5 / 9);

  const convertToFahreneit = temp => temp * (9 / 5) + 32;

  const convertTemp = ({ target }) => {
    const input = Number(target.value);
    let convertedTemperature;

    if (Number(option) === 1) {
      convertedTemperature = convertToFahreneit(input);
    } else {
      convertedTemperature = convertToCelsius(input);
    }
    setTemperature(input);
    setResult(convertedTemperature);
  };

  const question = (
    <Fragment>
      <p>
        Output:
        <br />
        <br />
        1. Celsius to Fahrenheit<br />
        2. Fahrenheit to Celsius<br />

        Enter an option:<br />
        If the user enters 1, ask the user to "Enter a celsius value:".<br />

        Else, ask the user to "Enter a Fahrenheit value:".<br />

        Convert the entered value to celsius or fahrenheit accordingly.<br />
      </p>
    </Fragment>
  );
  const link = 'https://github.com/mykeels/20-questions#5-temperature-unit-conversion'

  return (
    <Layout question={question} link={link}>
      <Flex direction="column">
        <span>Choose an option</span>
        <span>1. Celsius to Fahrenheit</span>
        <span>2. Fahrenheit to Celsius</span>
        <span>Enter an option:</span>
      </Flex>
      <input
        type="number"
        min="0"
        max="2"
        value={option}
        onChange={({ target }) => setOption(target.value)}
      />
      <br />
      <br />

      {Number(option) > 0 && (
        <Fragment>
          <label>
            Enter the temperature (in{" "}
            {Number(option) === 1 ? "Celsius" : "Fahrenheit"}):{" "}
          </label>
          <input type="number" value={temperature} onChange={convertTemp} />
          <br />
          <span>{result}</span>
        </Fragment>
      )}
    </Layout>
  );
}

export default TemperatureConverter;
