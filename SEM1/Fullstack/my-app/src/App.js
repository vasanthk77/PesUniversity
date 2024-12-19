import logo from './logo.svg';
import './App.css';
import React from "react";
import Demo from './rstyle.js'; // Corrected relative path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Demo /> {/* Renders the Demo component */}
        <a
          className="App-link"
          href="https://reactjs.org"y
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
