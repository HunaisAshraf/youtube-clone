import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utilities/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import LikeComponent from "./LikeComponent";
import VideoDescription from "./VideoDescription";
import Comments from "./Comments";
import { YOUTUBE_SINGLE_VIDEO_API } from "../utilities/constants";
import useVideos from "../utilities/useVideos";
import SuggestedVideos from "./SuggestedVideos";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [details, setDetails] = useState({});
  const [searchParams] = useSearchParams();

  const videos = useVideos();

  const dispatch = useDispatch();

  const isChat = useSelector((store) => store.chat.isChatOpen);

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, [searchParams]);

  const getVideoDetails = async () => {
    try {
      let data = await fetch(YOUTUBE_SINGLE_VIDEO_API + searchParams.get("v"));
      let json = await data.json();
      setDetails(json?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-wrap md:flex-nowrap py-3 ">
      <div className=" sm:ml-16 lg:w-[62rem]">
        <iframe
          className="w-full aspect-video px-2 rounded"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          autoPlay
        ></iframe>

        <LikeComponent info={details} />
        <VideoDescription info={details} />
        <Comments id={searchParams.get("v")} />
      </div>
      <div className="hidden lg:block w-[28rem]">
        {isChat && <LiveChat />}
        {videos?.map((video) => (
          <Link to={"/watch?v=" + video?.id} key={video?.id}>
            <SuggestedVideos info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
