import React, { useState, Fragment } from 'react';

// components
import Layout from '../common/Layout';


function FileReaderComponent({ setPage }) {
  let fileReader;
  const [content, setContent] = useState(null);

  const onUpload = ({ target }) => {
    const file = target.files[0]
    fileReader = new FileReader()
    fileReader.onloadend = readFile
    fileReader.readAsText(file)
  }

  const readFile = () => {
    const content = fileReader.result.split('\n').map((i, index) => {
      return <p key={index}>{i}</p>
    });
    setContent(content);
  }

  const question = (
    <Fragment>
      <p>
        Write a program to read a txt file, line by line,
        and output each line to the screen.
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#7-read-line-by-line";

  return <Layout question={question} link={link}>
    <input type="file" name="file" onChange={onUpload} accept=".txt" />
    <br />
    {content && (
      <div className="file-content">
        {content}
      </div>
    )}
  </Layout>
}

export default FileReaderComponent;
