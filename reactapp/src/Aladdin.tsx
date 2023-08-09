

import React,{Fragment,useState} from "react";
import { Unity, useUnityContext,} from 'react-unity-webgl';


export default function Aladdin() {
const [fullscreen, setFullscreen] = useState(false)




  const { unityProvider, requestFullscreen,} = useUnityContext({
    loaderUrl: "Unity/Aladdin/Build/Aladdin.loader.js",
    dataUrl: "Unity/Aladdin/Build/Aladdin.data.unityweb",
    frameworkUrl: "Unity/Aladdin/Build/Aladdin.framework.js.unityweb",
    codeUrl: "Unity/Aladdin/Build/Aladdin.wasm.unityweb",
    
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
      <button className="prettyButton" onClick={handleClickEnterFullscreen}>Press Play</button>
    </div>
  );
}


