import React from 'react';
import logo from './logo.svg';
import './App.css';
import UnityGame from './UnityGame';
import ChatGPT from './ChatGPT';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Adam Farkas
        </p>


        
      </header>
      <body className='App-body'>
        <h2>Projects</h2>
        <div><ChatGPT/></div>
        <UnityGame/>

      </body>

      
    </div>
  );
}

export default App;
