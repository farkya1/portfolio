

import React,{Fragment,useState,useEffect, createContext} from "react";
import { Unity, useUnityContext,} from 'react-unity-webgl';




export default function Aladdin() {



  const { unityProvider, requestFullscreen,} = useUnityContext({
    loaderUrl: "Unity/MerryMe/Build/MerryMe.loader.js",
    dataUrl: "Unity/MerryMe/Build/MerryMe.data.unityweb",
    frameworkUrl: "Unity/MerryMe/Build/MerryMe.framework.js.unityweb",
    codeUrl: "Unity/MerryMe/Build/MerryMe.wasm.unityweb",
    
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


