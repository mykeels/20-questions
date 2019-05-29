import React, { useState } from 'react';

// components
import Layout from '../common/Layout';


function Concatenation({ setPage }) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState("");

  return (
    <Layout setPage={setPage}>
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

      <br />
      <br />

      {firstName && lastName && age ? (
        <h3>
          Welcome, {firstName} {lastName} ({age})
        </h3>
      ) : null}
    </Layout>
  );
}

export default Concatenation;
