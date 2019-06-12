import React, { useState, Fragment } from 'react';

// components
import Layout from '../common/Layout';


function FileCombiner({ setPage }) {
  let fileReader;
  const [content, setContent] = useState([]);

  const onUpload = ({ target }) => {
    const file = target.files[0]
    fileReader = new FileReader()
    fileReader.onloadend = readFile
    fileReader.readAsText(file)
  }

  const readFile = () => {
    const newContent = fileReader.result.split('\n').map((i, index) => {
      return <p key={index}>{i}</p>
    });
    setContent([content, ...newContent]);
  }

  const question = (
    <Fragment>
      <p>
        Write a program to read two txt files, line by line,
        concatenate each line pair for both files,
        and output the concatenated result to the screen.
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#8-combine-two-files";

  return <Layout question={question} link={link}>
    <label>File One</label>
    <input type="file" name="fileOne" onChange={onUpload} accept=".txt" />
    <br />
    <label>File Two</label>
    <input type="file" name="fileTwo" onChange={onUpload} accept=".txt" />
    <br />
    {content && (
      <div className="file-content">
        {content}
      </div>
    )}
  </Layout>
}

export default FileCombiner;
