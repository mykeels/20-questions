import React, { useState, Fragment } from 'react';

// components
import Layout from '../common/Layout';

// utils
import { calculateCGPA } from '../utils/calculateCGPA';

function SimpleCGPACalculator({ setPage }) {
  const [fileContent, setFileContent] = useState([]);
  const fileReader = new FileReader();

  const readFile = () => {
    // remove new line at the EOF
    const file = fileReader.result.split('\n').filter(el => el.length);
    const [, ...otherLines] = file;
    setFileContent(otherLines);
  };

  const onUpload = ({ target }) => {
    const file = target.files[0];
    fileReader.onloadend = readFile;
    fileReader.readAsText(file);
  };

  const question = (
    <Fragment>
      <p>
      Write a program to read a CSV file of student IDs, names <br />
      and scores, and for each student, output their name, ID, <br />
      average score and CGPA in the following format: <br />

      </p>
      <pre>
        &lt;name&gt; (&lt;id&gt;): &lt;average-score&gt; &lt;cgpa&gt;
      </pre>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#18-simple-cgpa-calculator";

  return (
    <Layout question={question} link={link}>
      <label>Upload Results CSV file</label>
      <input
        type="file"
        name="resultFile"
        id="resultFile"
        onChange={onUpload}
        accept=".csv"
      />
      {fileContent.length > 0 && (
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Average</th>
              <th>CGPA</th>
            </tr>
            {calculateCGPA(fileContent).map(el => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td className="student-name">{el.name}</td>
                  <td>{el.average}</td>
                  <td>{el.CGPA.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Layout>
  );
}

export default SimpleCGPACalculator;
