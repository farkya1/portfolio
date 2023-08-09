

import React,{Fragment,useState} from "react";
import { Unity, useUnityContext,} from 'react-unity-webgl';


export default function ZombieCave() {
const [fullscreen, setFullscreen] = useState(false)




  const { unityProvider, requestFullscreen,} = useUnityContext({
    loaderUrl: "Unity/ZombieCave/Build/Unity.loader.js",
    dataUrl: "Unity/ZombieCave/Build/Unity.data.unityweb",
    frameworkUrl: "Unity/ZombieCave/Build/Unity.framework.js.unityweb",
    codeUrl: "Unity/ZombieCave/Build/Unity.wasm.unityweb",
    
  });

  

  
  const [hidden,setHidden] = useState({display:"none"})

  


  function handleClickEnterFullscreen() {
    setHidden({display:"block"});
    requestFullscreen(true);

    
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.keyCode === 27 && hidden["display"]==="block") {
      setHidden({display:"none"});
    }
    

    
  }
  document.addEventListener('keydown', handleKeyDown);
  


  return (
    <div>
      <Unity unityProvider={unityProvider} style={hidden}/>
      <button className="prettyButton" onClick={handleClickEnterFullscreen}>Press Play</button>
    </div>
  );
}


