import React from 'react';
import './App.css';
import zombieImage from "./ZombieCave.png"
import aladdinImage from "./aladdin.png"
import merryImage from "./MerryMe.png"
import ZombieCave from './ZombieCave';
import githubImage from "./github.png"
import linkImage from "./Linkedin.png"
import Aladdin from './Aladdin';
import MerryMe from './MerryMe';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <div className='headerFlex'>
          
        <a href='https://www.linkedin.com/in/adam-farkas-868862255/'><img className="headerImage" style={{width:"75px",height:"auto"}} src={linkImage}/></a>
        <p>
          Adam Farkas
        </p>
        <a href='https://github.com/farkya1'><img className="headerImage" style={{width:"60px",height:"auto"}} src={githubImage}/></a>
        </div>
        
        

        
      </header>
      <body className='App-body'>

        <h2>Zombie Cave</h2>
        <div className='gameFlex'>
          <div className='gameElement'>
            
            <img className="gameImage"  src={zombieImage}/>
            <ZombieCave/>
          </div>
          <div className='gameText'>
            <p>Designed and developed a Unity-based game featuring dynamic level generation, where players engage in randomized environments. Demonstrated teamwork and problem-solving by creating diverse enemy encounters and weapon mechanics, resulting in an engaging player experience with strategic decision-making dynamics</p>
          </div>
          
        </div>

        <h2>Aladdin</h2>
        <div className='gameFlex'>

        <div className='gameElement'>
            
            <img className="gameImage"src={aladdinImage}/>
            <Aladdin/>
          </div>
          
          <div className='gameText'>
            <p>In the Unity WebGL project, I recreated the classic SNES Aladdin game by focusing on Aladdin's dynamic gameplay. I designed Aladdin's character to swing and seamlessly maneuver around obstacles and enemies, giving players an authentic experience. Additionally, I meticulously crafted the movements and attack patterns of the enemies, ensuring that they provide a challenging and engaging environment for players to navigate through.</p>
          </div>
          
          
          
        </div>

        <h2>Merry Me</h2>
          
        <div className='gameFlex'>
          <div className='gameElement'>
            
            <img className="gameImage"src={merryImage}/>
              <MerryMe/>
            </div>
            
            <div className='gameText'>
              <p>
During a weekend game jam, I contributed to the development of a Unity WebGL horror game where players are trapped in a haunted house, desperately trying to escape alive. My primary role was to design and implement the player's interactions with various items within the game, enhancing the immersion and suspense. Additionally, I collaborated on the level design, creating an eerie and atmospheric environment that added to the game's overall sense of dread and challenge.</p>
            </div>
        </div>
          


      </body>

      
    </div>
  );
}

export default App;
