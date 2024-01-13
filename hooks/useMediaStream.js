import { useEffect, useRef, useState } from "react";
// Whenever this hook is instantiated, it will request access for your mic and camera
// It will set up the stream in a reactive variable
// Once done, the stream can be consumed and rendered in a player
const useMediaSteam = () => {
  const [state, setState] = useState(null);
  const isStreamSet = useRef(false);
  useEffect(() => {
    if (isStreamSet.current) return;
    isStreamSet.current = true;
    (async function initStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
        console.log("setting your stream", stream);
        setState(stream);
      } catch (err) {
        console.log("Error in media navigator", err);
      }
    })();
  }, []);

  return {
    stream: state,
  };
};
export default useMediaSteam;
