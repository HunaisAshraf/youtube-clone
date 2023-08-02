import { BiSolidUserCircle, BiLike, BiDislike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { LiaDownloadSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { toggleChat } from "../utilities/chatSlice";

const LikeComponent = ({ info }) => {
  const dispatch = useDispatch()
  return (
    <>
      <h1 className="py-1 w-0 min-w-full px-2 text-xl font-semibold">{info?.snippet?.title}</h1>
      <div className="flex justify-between flex-wrap ">
        <div className="flex items-center gap-7">
          <div className="flex gap-2 items-center">
            <BiSolidUserCircle className="text-4xl" />
            <span className="font-semibold">{info?.snippet?.channelTitle}</span>
          </div>
          <div>
            <button className="bg-gray-200 px-6 py-2 rounded-full font-semibold mr-3">
              Join
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-full font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex gap-2 py-4">
          <div className="flex items-center gap-0.5">
            <button className="flex items-center gap1 bg-gray-200 px-4 py-2 rounded-l-full  font-semibold">
              <BiLike className=" text-2xl" />
              {new Intl.NumberFormat("en-US", {
                maximumSignificantDigits: 3,
              }).format(info?.statistics?.likeCount)}
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-r-full font-semibold">
              <BiDislike className=" text-2xl" />
            </button>
          </div>
          <button onClick={()=>dispatch(toggleChat())} className="hidden md:block bg-gray-200 px-4 py-2 rounded-full font-bold">
            Chat
          </button>
          <div className="flex gap-2">
            <button className="flex items-center gap1 bg-gray-200 px-4 py-2 rounded-full font-semibold">
              <TbShare3 className=" text-2xl" /> Share
            </button>
            <button className="flex items-center gap1 bg-gray-200 px-4 py-2 rounded-full font-semibold">
              <LiaDownloadSolid className=" text-2xl" /> Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikeComponent;
