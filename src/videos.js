import { useRef,forwardRef, useImperativeHandle } from "react";
import videos1 from "./videos/1399001113488395671.mp4"
function Video(props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }))
    return (
        <video 
            ref={videoRef}
            src={videos1} 
            width={500}
            />
    )
}

export default forwardRef(Video);