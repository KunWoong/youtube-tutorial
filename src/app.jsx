import React, { useCallback, useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/video_detail";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    youtube
      .mostPopular() //
      .then((items) => setVideos(items));
  }, [youtube]);

  const searchHandler = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((items) => {
          setVideos(items);
          setSelected(null);
        });
    },
    [youtube]
  );

  const selectVideo = (video) => {
    setSelected(video);
  };
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={searchHandler} />
      <section className={styles.content}>
        {selected && (
          <div className={styles.detail}>
            <VideoDetail video={selected} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            selectVideo={selectVideo}
            display={selected ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
