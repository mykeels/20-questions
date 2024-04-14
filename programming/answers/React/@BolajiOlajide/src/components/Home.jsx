import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return <div className="App">
    <Link to="/01-name-concatenation">Name Concatenation</Link>
    <Link to="/02-lottery">Lottery</Link>
    <Link to="/03-word-in-reverse">Word in Reverse</Link>
    <Link to="/04-type-in-reverse">Type in Reverse</Link>
    <Link to="/05-temperature-converter">Temperature Unit Conversion</Link>
    <Link to="/06-multiplication">Multiplication Table</Link>
    <Link to="/07-read-line">Read line by line</Link>
    <Link to="/08-combine-files">Combine Two Files</Link>
    <Link to="/09-rgb-color-generator">RGB Color Generator</Link>
    <Link to="/10-hex-color-generator">Hex Color Generator</Link>
    <Link to="/11-extract-extension">Extract File Extension</Link>
    <Link to="/12-extract-extension">Salary Classifier</Link>
    <Link to="/13-tax-classifier">Tax Classifier</Link>
    <Link to="/14-number-in-words">Number in Words</Link>
    <Link to="/15-compound-interest">Compound Interest Calculator</Link>
    <Link to="/16-convert-to-decimal">Convert to Decimal</Link>
    <Link to="/17-convert-decimal-to-base-n">Convert Decimal to Base n</Link>
    <Link to="/18-simple-cgpa-calculator">Simple CGPA calculator</Link>
    <Link to="/19-attendance">Attendance Register</Link>
    <Link to="/20-love-calculator">Love Calculator</Link>
  </div>
}

export default Home;
