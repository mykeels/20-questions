import React, { Fragment } from 'react';

// components
import Layout from '../common/Layout';


function Attendance() {
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
      <p>Attendance</p>
    </Layout>
  )
}

export default Attendance;
