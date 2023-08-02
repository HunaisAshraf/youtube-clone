const SuggestedVideos = ({ info }) => {
  console.log(info);
  return (
    <div className="flex gap-1 px-2 py-4">
      <img 
        src={info?.snippet?.thumbnails?.medium?.url}
        alt={info?.snippet?.title}
        className=" rounded-lg w-1/3"
      />
      <div className="">
        <p className="font-semibold">{info?.snippet?.title.substring(0,70)}...</p>
        <p className="text-sm">{info?.snippet?.channelTitle}</p>
        <p className="text-sm">{new Intl.NumberFormat("en-US", {
              maximumSignificantDigits: 3,
            }).format(info?.statistics?.viewCount)} views</p>
      </div>
    </div>
  );
};

export default SuggestedVideos;
