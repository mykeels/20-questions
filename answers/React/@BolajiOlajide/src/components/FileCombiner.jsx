import React, { useState } from 'react';

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

  return <Layout setPage={setPage}>
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
