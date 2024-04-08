import React, { useRef } from "react";
import ReactPlayer from "react-player";
import './VideoPlayer.scss';

const video = "https://youtu.be/o6tMhmhJ4os?si=zk9w4cXf7H4uV60G";
function VideoPlayer() {
  const playerRef = useRef(null);
  return (
    <>
      <ReactPlayer
        className="player"
        ref={playerRef}
        url={video}
        controls={true}
        width='850px'
        height='400px'
      />
    </>
  );
}

export default VideoPlayer;
