import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { generateName, generateString } from "../utilities/helper";
import { addMessages, toggleChat } from "../utilities/chatSlice";

const LiveChat = () => {
  const [newMessage, setNewMessagge] = useState("");

  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const message = setInterval(() => {
      dispatch(
        addMessages({
          name: generateName(),
          message: generateString(15),
        })
      );
    }, 1000);

    return () => {
      clearInterval(message);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[33rem] p-3 border border-gray-500 rounded flex flex-col-reverse overflow-y-scroll">
        {messages.map((m, i) => (
          <ChatMessage key={i} name={m.name} message={m.message} />
        ))}
      </div>
      <div className="p-2 border">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessages({
                name: "You",
                message: newMessage,
              })
            );
            setNewMessagge("");
          }}
        >
          <input
            value={newMessage}
            onChange={(e) => setNewMessagge(e.target.value)}
            className="border-2 rounded-l-full w-4/5 px-3 py-1"
            type="text"
            maxLength={35}
          />
          <button className="w-1/5 bg-slate-200 rounded-r-full border-2 py-1">
            send
          </button>
        </form>
        <div className="text-center py-1">
          <button onClick={() => dispatch(toggleChat())}>HideChat</button>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
