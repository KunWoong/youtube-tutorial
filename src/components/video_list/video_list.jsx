import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  return (
    <ul>
      {props.videos.map((video) => (
        <VideoItem id={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
