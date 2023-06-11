import React, { useRef } from "react";

function MiniChatBox({ toUser, controlChatbox, putMessages, newMessages }) {
  const messages = [
    { message: "Lorem ipsum dolor sit amet,", from: false },
    { message: "Lorem ipsum :)", from: true },
    { message: "dolor sit amet?", from: false },
    { message: "Lorem ipsum.", from: true },
  ];
  console.log(newMessages);
  const inref = useRef();
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
      {toUser && (
        <div className="flex flex-col h-36">
          <div className="flex flex-col px-2 overflow-y-scroll">
            {messages.map((e, i) => (
              <div
                key={i}
                className={
                  e.from
                    ? "bg-slate-100 my-1 w-3/4 text-xs p-2 place-self-end"
                    : "bg-slate-100 my-1 w-3/4 text-xs p-2 place-self-start"
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
              ref={inref}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-blue-500"
              onClick={() => {
                putMessages(toUser.id, inref.current.value);
                inref.current.value = "";
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
