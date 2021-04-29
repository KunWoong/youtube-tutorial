import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";

const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("Kwy");
  useEffect(() => {
    console.log("useEffect");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/search?" +
        "part=snippet&maxResults=20&q=박재범&regionCode=KR&key=AIzaSyBtqrpsAIzG-Dt165BBEbY43TDkjH2zer8",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
};

export default App;
