import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideos from "../utilities/useVideos";

const VideoContainer = () => {
  const videos = useVideos();

  return (
    <div className="flex flex-wrap justify-center">
      {videos?.map((video) => (
        <Link
          to={"/watch?v=" + video.id}
          state={{ data: video }}
          key={video.id}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
