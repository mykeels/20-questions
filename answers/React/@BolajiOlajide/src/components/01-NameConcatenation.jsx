import React, { useState, Fragment } from 'react';

// components
import Layout from '../common/Layout';


function Concatenation({ setPage }) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState("");

  const question = (
    <Fragment>
      <p>
        Request the user's first name, last name and age.<br />
        Print out Welcome, &lt;First-Name&gt; &lt;Last-Name&gt; (&lt;Age&gt;) in a new line.
      </p>
    </Fragment>
  );
  const link = "https://github.com/mykeels/20-questions#1-name-concatenation";

  return (
    <Layout question={question} link={link}>
      {firstName && lastName && age ? (
        <h3>
          Welcome, {firstName} {lastName} ({age})
        </h3>
      ) : null}

      <br />
      <br />

      <label>First Name: </label>
      <input
        value={firstName}
        onChange={({ target }) => setfirstName(target.value)}
      />
      <br />
      <br />
      <label>Last Name: </label>
      <input
        value={lastName}
        onChange={({ target }) => setlastName(target.value)}
      />
      <br />
      <br />
      <label>Age: </label>
      <input
        value={age}
        onChange={({ target }) => setAge(target.value)}
        type="number"
      />
    </Layout>
  );
}

export default Concatenation;
