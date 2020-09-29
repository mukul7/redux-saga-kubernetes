import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello!</p>
        <p>
          Learn <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >React </a> and  <a
            className="App-link"
            href="https://redux-saga.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          > redux-saga </a> and  <a
            className="App-link"
            href="https://www.arduino.cc/"
            target="_blank"
            rel="noopener noreferrer"
          > arduino </a>
        </p>
      </header>
    </div>
  );
}

export default App;
