

import React,{Fragment,useState,useEffect, createContext} from "react";
import { Unity, useUnityContext,} from 'react-unity-webgl';




export default function Aladdin() {



  const { unityProvider, requestFullscreen,} = useUnityContext({
    loaderUrl: "Unity/Aladdin/Build/Aladdin.loader.js",
    dataUrl: "Unity/Aladdin/Build/Aladdin.data.unityweb",
    frameworkUrl: "Unity/Aladdin/Build/Aladdin.framework.js.unityweb",
    codeUrl: "Unity/Aladdin/Build/Aladdin.wasm.unityweb",
    
  });


 

  function handleClickEnterFullscreen() {
    
    requestFullscreen(true);
    
  }
  


  return (
    <div>
      <Unity unityProvider={unityProvider} style={{width:0, height:0}}/>
      <button className="prettyButton" onClick={handleClickEnterFullscreen}>Press Play</button>
    </div>
  );
}


