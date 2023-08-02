import { useSelector } from "react-redux";
import {BiSolidUserCircle} from "react-icons/bi"

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;

  const isOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <>
      {isOpen ? (
        <div className="my-4 mx-1 w-80">
         
            <img
              src={thumbnails?.medium?.url}
              alt={title}
              className=" rounded-lg"
            />
         
          <h2 className="text-sm pr-14 font-semibold py-2">{title.substring(0, 50)}</h2>
          <p className="text-sm flex gap-1 items-center"><BiSolidUserCircle className="text-xl"/> {channelTitle}</p>
          <p className="text-xs">
            {new Intl.NumberFormat("en-US", {
              maximumSignificantDigits: 3,
            }).format(statistics?.viewCount)}{" "}
            views
          </p>
        </div>
      ) : (
        <div className="my-4 mx-2 w-[22rem]">
          {thumbnails.maxres ? (
            <img
              src={thumbnails?.maxres?.url}
              alt={title}
              className=" rounded-lg"
            />
          ) : (
            <img
              src={thumbnails?.medium?.url}
              alt={title}
              className=" rounded-lg"
            />
          )}
          <h2 className="text-sm pr-14 font-semibold py-2">{title.substring(0, 50)}</h2>
          <p className="text-sm flex gap-1 items-center"><BiSolidUserCircle className="text-xl"/> {channelTitle}</p>
          <p className="text-xs">
            {new Intl.NumberFormat("en-US", {
              maximumSignificantDigits: 3,
            }).format(statistics?.viewCount)}{" "}
            views
          </p>
        </div>
      )}
    </>
  );
};

export default VideoCard;
