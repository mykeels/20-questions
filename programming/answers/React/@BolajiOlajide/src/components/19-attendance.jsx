import React, { Fragment, useState } from 'react';

// components
import Layout from '../common/Layout';


function Attendance() {
  let fileReader;
  const [content, setContent] = useState(null);

  function studentCheck(name, index) {
    return <Fragment key={index}>
      <div className="attendance">
        <span>{name}</span>
        <select>
          <option>-</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
    </Fragment>
  }

  const onUpload = ({ target }) => {
    const file = target.files[0]
    fileReader = new FileReader()
    fileReader.onloadend = readFile
    fileReader.readAsText(file)
  }

  const readFile = () => {
    const content = fileReader.result.split('\n')
      .map((name, index) => studentCheck(name, index));
    setContent(content);
  }

  const question = (
    <Fragment>
      <p>
        Read student names, line by line, from a file.<br />
        For each name, ask if the student is in class.<br />
        E.g. Is Bisi in class? [yes/no]<br />
        Let the user input either yes or no.
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#19-attendance-register";

  return (
    <Layout question={question} link={link}>
      <input type="file" name="file" onChange={onUpload} accept=".txt" />
      {content && (
        <Fragment>
          {content}
        </Fragment>
      )}
    </Layout>
  )
}

export default Attendance;
