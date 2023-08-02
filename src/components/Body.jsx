import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import Shimmer from "./Shimmer";
import useVideos from "../utilities/useVideos";

const Body = () => {
  const videos = useVideos();
  return videos?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Header />
      <div className="flex pt-14">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
