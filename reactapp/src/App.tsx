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
        <ChatGPT/>
        <UnityGame/>
        
      </header>

      
    </div>
  );
}

export default App;
