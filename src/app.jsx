import React, { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    youtube
      .mostPopular() //
      .then((items) => setVideos(items));
  }, []);

  const searchHandler = (query) => {
    youtube
      .search(query) //
      .then((items) => setVideos(items));
  };
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={searchHandler} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
