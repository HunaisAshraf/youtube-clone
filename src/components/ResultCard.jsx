const ResultCard = ({ info }) => {
  return (
    <>
      <div className="flex flex-wrap m-3 shadow md:flex-nowrap gap-3 p-4">
        <img
          className="rounded-xl"
          src={info?.snippet?.thumbnails?.medium?.url}
          alt={info?.snippet?.title}
        />
        <div>
          <p className="text-xl font-semibold">{info?.snippet?.title}</p>
          <div className="mt-5">
            <p className="text-sm">{info?.snippet?.channelTitle}</p>
            <p className="hidden sm:block">
              {info?.snippet?.description.substring(0, 100)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
