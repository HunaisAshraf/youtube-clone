import { useEffect, useState } from "react";
import { YOUTUBE_API } from "./constants";

const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    try {
      let data = await fetch(YOUTUBE_API);
      let json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return videos;
};

export default useVideos;
