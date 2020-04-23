import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InterSimp from "./khalil/InterSimp"; //to test InterSimp component

function App() {
  return (
    <React.StrictMode>
      <InterSimp />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </React.StrictMode>
  );
}

export default App;
