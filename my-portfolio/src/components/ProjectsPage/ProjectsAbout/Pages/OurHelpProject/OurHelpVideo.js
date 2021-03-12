import React from "react";
import VideoPlayer from "react-video-js-player";
import "../../../Projects.css"
import OurHelpVideo from "../WeatherProject/video/WeatherAppVideo.mp4";

const VideoJS = () => {
  const videoSrc = OurHelpVideo;

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
