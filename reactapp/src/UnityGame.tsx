
import React,{Fragment,useEffect} from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function UnityGame() {
  const { unityProvider, requestFullscreen } = useUnityContext({
    loaderUrl: "Unity/Build/temp.loader.js",
    dataUrl: "Unity/Build/temp.data.unityweb",
    frameworkUrl: "Unity/Build/temp.framework.js.unityweb",
    codeUrl: "Unity/Build/temp.wasm.unityweb",
  });

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }


  return (
    <Fragment>
      <Unity unityProvider={unityProvider} />
      <button onClick={handleClickEnterFullscreen}>Enter Fullscreen</button>
    </Fragment>
  );
}


