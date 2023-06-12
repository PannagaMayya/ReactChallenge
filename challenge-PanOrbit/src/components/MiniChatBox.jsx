import React, { useRef, useState, useEffect } from "react";

function MiniChatBox({
  toUser,
  controlChatbox,
  putMessages,
  getMessages,
  curUserId,
}) {
  let [inp, setInp] = useState("");
  const [messages, setMessages] = useState([
    { message: "Lorem ipsum dolor sit amet,", from: false },
    { message: "Lorem ipsum :)", from: true },
    { message: "dolor sit amet?", from: false },
    { message: "Lorem ipsum.", from: true },
  ]);
  useEffect(() => {
    setMessages((data) => [
      { message: "Lorem ipsum dolor sit amet,", from: false },
      { message: "Lorem ipsum :)", from: true },
      { message: "dolor sit amet?", from: false },
      { message: "Lorem ipsum.", from: true },
      ...getMessages(curUserId, toUser.id),
    ]);
  }, [toUser, curUserId]);

  return (
    <div className="absolute top-1/4 right-full w-full flex flex-col bg-white border border-blue-200 rounded-xl mr-10">
      <div className="flex items-center justify-between bg-blue-500 text-white p-3 rounded-t-xl">
        <span className="flex items-center">
          <img src={toUser.img} className="w-5 rounded-3xl" />
          <span className="text-xs font-thin mx-2">{toUser.name}</span>
        </span>
        <span className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
            onClick={() => {
              controlChatbox(null, false);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
            onClick={() => {
              controlChatbox(null, false);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
      {/* Chats Body */}
      {toUser && (
        <div className="flex flex-col h-40 ">
          <div className="flex flex-col-reverse px-2 overflow-y-scroll">
            {[...messages].reverse().map((e, i) => (
              <div
                key={i}
                className={
                  e.from
                    ? "bg-slate-200 rounded-md my-1 w-3/4 text-xs p-2 text-gray-500	font-normal place-self-end"
                    : "bg-slate-200 rounded-md my-1 w-3/4 text-xs p-2 text-gray-500	font-normal place-self-start"
                }
              >
                {e.message}
              </div>
            ))}
          </div>
          <div className="flex justify-between px-2">
            <input
              type="text"
              placeholder="type something..."
              className="border-2 border-slate-200 ml-2 p-1 text-xs"
              value={inp}
              onChange={(d) => {
                setInp(d.target.value);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-blue-500"
              onClick={() => {
                putMessages(toUser.id, inp);
                setMessages((d) => [...d, { message: inp, from: true }]);
                setInp("");
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default MiniChatBox;
