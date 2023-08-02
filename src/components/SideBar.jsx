import { GoHomeFill, GoVideo } from "react-icons/go";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { LiaPhotoVideoSolid, LiaFireAltSolid } from "react-icons/lia";
import { PiMusicNoteBold, PiFilmSlateDuotone } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="hidden sm:block h-full sticky top-11">
      <div className="py-4 px-5 border-b-2 ">
        <ul>
          <Link to="/">
            <li className="flex items-center gap-2 py-3  text-sm font-semibold">
              <GoHomeFill className="text-2xl mr-3" /> Home
            </li>
          </Link>
          <li className="flex items-center gap-2 py-3 text-sm font-semibold">
            <LiaPhotoVideoSolid className="text-2xl mr-3" /> Shorts
          </li>
          <li className="flex items-center gap-2 py-3 text-sm font-semibold">
            <MdOutlineSubscriptions className="text-2xl mr-3" /> Subscriptions
          </li>
        </ul>
      </div>
      <div className="py-4 px-5 border-b-2">
        <ul>
          <li className="flex items-center gap-2 py-3 text-sm font-semibold">
            <MdOutlineVideoLibrary className="text-2xl mr-3" /> Library
          </li>
          <li className="flex items-center gap-2 py-3 text-sm font-semibold">
            <MdHistory className="text-2xl mr-3" />
            History
          </li>
          <li className="flex items-center gap-2 py-3 text-sm font-semibold">
            <GoVideo className="text-2xl mr-3" /> Your videos
          </li>
          <li className="flex items-center gap-2 py-3 text-sm font-semibold">
            <MdOutlineWatchLater className="text-2xl mr-3" /> Watch Later
          </li>
          <li className="flex items-center gap-2 py-3 text-sm font-semibold">
            <BiLike className="text-2xl mr-3" />
            Liked videos
          </li>
        </ul>
      </div>
      <div className="py-4 px-5 border-b-2">
        <h1 className="font-bold text-lg">Explore</h1>
        <ul>
          <li className="flex items-center gap-2 py-3 text-sm font-semibold">
            <LiaFireAltSolid className="text-2xl mr-3" /> Trending
          </li>
          <li className="flex items-center gap-2 py-3 text-sm font-semibold">
            <PiMusicNoteBold className="text-2xl mr-3" />
            Music
          </li>
          <li className="flex items-center gap-2 py-3 text-sm font-semibold">
            <PiFilmSlateDuotone className="text-2xl mr-3" />
            Films
          </li>
          <li className="flex items-center gap-2 py-3 text-sm font-semibold">
            <CiStreamOn className="text-2xl mr-3" /> Live
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
