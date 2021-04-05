import React from "react";
import VideoPlayer from "react-video-js-player";
import "../../../Projects.css"

const VideoJS = () => {
  const videoSrc = "https://drakes-portfolio.s3-us-west-2.amazonaws.com/video/ShoppingCartApp.mp4";

  return (
    <div className="row justify-content-center">
      <VideoPlayer
        src={videoSrc}
        width="720"
        height="420"
        playbackeRate={[0.5, 1, 3.85, 16]}
        autoplay
      />
    </div>
  );
};

export default VideoJS;
