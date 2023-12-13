import {  useEffect, useRef } from "react";
import Video from "./videos";
function App() {
  const videoRef = useRef();
  // test
  useEffect(() => {
    console.log(videoRef.current)
  })

  const handlePlay = () => {
    videoRef.current.play()
  }
  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div>
      <Video ref={videoRef} ></Video>
      <button onClick={handlePlay} >Play</button>
      <button onClick={handlePause} >Pause</button>
    </div>
  );
}

export default App;
