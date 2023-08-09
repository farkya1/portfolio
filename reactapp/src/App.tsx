import React from 'react';
import './App.css';
import ChatGPT from './ChatGPT';
import zombieImage from "./ZombieCave.png"
import aladdinImage from "./aladdin.png"
import ZombieCave from './ZombieCave';
import Aladdin from './Aladdin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Adam Farkas
        </p>


        
      </header>
      <body className='App-body'>
        <h2>Projects</h2>
        <div><ChatGPT/></div>

        <h2>Unity Projects</h2>
        <div>
          <img className="gameImage"src={zombieImage}/>
          <ZombieCave/>
        </div>

        <div>
          <img className="gameImage"src={aladdinImage}/>
          <Aladdin/>
        </div>

      </body>

      
    </div>
  );
}

export default App;
