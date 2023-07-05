
import { isVisible } from "@testing-library/user-event/dist/utils";
import React,{Fragment,useState,useEffect} from "react";
import { Unity, useUnityContext,} from 'react-unity-webgl';

export default function UnityGame() {
const [fullscreen, setFullscreen] = useState(false)




  const { unityProvider, requestFullscreen} = useUnityContext({
    loaderUrl: "Unity/Build/Unity.loader.js",
    dataUrl: "Unity/Build/Unity.data.unityweb",
    frameworkUrl: "Unity/Build/Unity.framework.js.unityweb",
    codeUrl: "Unity/Build/Unity.wasm.unityweb",
    
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
    <Fragment>
      <Unity unityProvider={unityProvider} style={hidden}/>
      <button onClick={handleClickEnterFullscreen}>Enter Fullscreen</button>
    </Fragment>
  );
}


