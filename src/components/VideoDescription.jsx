import { useState } from "react";

const VideoDescription = ({ info }) => {
  const [view, setView] = useState(false);
  // const { snippet, statistics } = info;
  return (
    <div className="bg-gray-200 w-0 min-w-full p-4 rounded-xl ">
      <div className="flex gap-2 font-semibold">
        <p>
          {new Intl.NumberFormat("en-US", {
            maximumSignificantDigits: 3,
          }).format(info?.statistics?.viewCount)}{" "}
          views
        </p>
        <p>{info?.snippet?.publishedAt.substring(0, 10)}</p>
      </div>
      <div className="pt-4 w-0 min-w-full font-semibold overflow-x-hidden">
        {!view ? (
          <>
            <p>{info?.snippet?.description.substring(0, 100)}</p>
            <button  className="text-gray-600" onClick={()=>setView(true)}>Show More</button>
          </>
        ) : (
          <>
            <p>{info?.snippet?.description}</p>
            <button  className="text-gray-600" onClick={()=>setView(false)}>Show Less</button>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoDescription;
