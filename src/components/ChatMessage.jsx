import { BiSolidUserCircle } from "react-icons/bi";
const ChatMessage = ({name,message}) => {
  return (
    <div className="flex gap-2 items-center ">
      <span>
        <BiSolidUserCircle className="text-3xl" />
      </span>
      <span className="font-semibold mr-3">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
