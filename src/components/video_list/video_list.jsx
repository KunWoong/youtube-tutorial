import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = (props) => {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoClick={props.selectVideo}
          display={props.display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
