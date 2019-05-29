import React, { useState } from "react";
import ReactDOM from "react-dom";

import Children from './common/Children';
import "./styles.css";


function App() {
  const [page, setPage] = useState('home')

  return <Children page={page} setPage={setPage} />
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
