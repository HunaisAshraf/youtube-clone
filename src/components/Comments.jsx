import { useEffect, useState } from "react";
import { COMMENTS_API } from "../utilities/constants";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, [id]);

  const getComments = async () => {
    try {
      let data = await fetch(COMMENTS_API + id);
      let json = await data.json();
      console.log(
        json?.items[1].snippet?.topLevelComment?.snippet?.authorDisplayName
      );
      setComments(json?.items);
      console.log(comments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-3 w-0 min-w-full">
      <p className="font-bold text-xl">Comments</p>
      {comments?.map((comment) => (
        <div
          key={comment?.id}
          className="flex items-center gap-2 my-6 shadow-sm px-1 overflow-hidden"
        >
          <img
            className="rounded-full h-11"
            src={
              comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
            }
            alt={comments?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          />
          <div>
            <p className="font-bold">
              @{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
            </p>
            <p className="font-semibold">
              {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
