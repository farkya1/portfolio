

import React,{useEffect, useState} from "react";
import { Unity, useUnityContext,} from 'react-unity-webgl';


export default function ZombieCave() {




  const { unityProvider, requestFullscreen} = useUnityContext({
    loaderUrl: "Unity/ZombieCave/Build/ZombieCave.loader.js",
    dataUrl: "Unity/ZombieCave/Build/ZombieCave.data.unityweb",
    frameworkUrl: "Unity/ZombieCave/Build/ZombieCave.framework.js.unityweb",
    codeUrl: "Unity/ZombieCave/Build/ZombieCave.wasm.unityweb",
    
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


