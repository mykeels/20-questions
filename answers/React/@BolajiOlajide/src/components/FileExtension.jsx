import React, { useState, Fragment } from 'react';

// components
import Layout from '../common/Layout';


function FileExtension({ setPage }) {
  const [paths, setPaths] = useState('');
  const [extensions, setExtensions] = useState(null);

  const generateExtensions = () => {
    const extList = paths.split('\n').map((path, index) => {
      const splitPath = path.split('.')
      const extension = splitPath[splitPath.length - 1]
      return (extension && splitPath.length > 1) ? <p key={index}>.{extension}</p> : null;
    });
    setExtensions(extList)
  }

  return <Layout setPage={setPage}>
    <textarea value={paths} onChange={({ target: { value }}) => setPaths(value)} rows={10} cols={30}></textarea>
    <button onClick={generateExtensions}>Get Extensions</button>
    {extensions && (
      <Fragment>
        {extensions}
      </Fragment>
    )}
  </Layout>
}

export default FileExtension;
