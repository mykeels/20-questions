import React from 'react';


function Home({ setPage }) {
  return <div className="App">
    <div onClick={() => setPage('name-concatenation')}>Name Concatenation</div>
    <div onClick={() => setPage('lottery')}>Lottery</div>
    <div onClick={() => setPage('word-in-reverse')}>Word in Reverse</div>
    <div onClick={() => setPage('type-in-reverse')}>Type in Reverse</div>
    <div onClick={() => setPage('temp-converter')}>Temperature Unit Conversion</div>
    <div onClick={() => setPage('multiplication')}>Multiplication Table</div>
    <div onClick={() => setPage('file-reader')}>Read line by line</div>
    <div onClick={() => setPage('file-combiner')}>Combine Two Files</div>
    <div onClick={() => setPage('rgb')}>RGB Color Generator</div>
    <div onClick={() => setPage('hex')}>Hex Color Generator</div>
    <div onClick={() => setPage('file-extension')}>Extract File Extension</div>
    <div onClick={() => setPage('salary')}>Salary Classifier</div>
    <div onClick={() => setPage('tax')}>Tax Classifier</div>
    <div onClick={() => setPage('numbers-in-words')}>Number in Words</div>
    <div onClick={() => setPage('compound-interest')}>Compound Interest Calculator</div>
    <div onClick={() => setPage('')}>Convert to Decimal</div>
    <div onClick={() => setPage('')}>Convert Decimal to Base n</div>
    <div onClick={() => setPage('')}>Simple CGPA calculator</div>
    <div onClick={() => setPage('')}>Attendance Register</div>
    <div onClick={() => setPage('')}>Love Calculator</div>
  </div>
}

export default Home;
