import React, { useState, useEffect } from "react";
import MiniChatBox from "./MiniChatBox";
import { useLocation } from "react-router-dom";
const getMessages = (from, to) => {
  let temp =
    JSON.parse(sessionStorage.getItem("from-" + from + "to-" + to)) || [];
  return temp;
};

function ChatBox() {
  let pageState = useLocation();
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [toUser, setToUser] = useState(null);
  const putMessages = (id, message) => {
    let temp = getMessages(pageState.state.currentUser.id, id);
    sessionStorage.setItem(
      "from-" + pageState.state.currentUser.id + "to-" + id,
      JSON.stringify([...temp, { message: message, from: true }])
    );
    temp = getMessages(id, pageState.state.currentUser.id);
    sessionStorage.setItem(
      "from-" + id + "to-" + pageState.state.currentUser.id,
      JSON.stringify([...temp, { message: message, from: false }])
    );
  };
  const controlChatbox = (user, toOpen) => {
    setToUser(user);
    setChatOpen(toOpen);
  };

  return (
    <div
      className={
        open
          ? "flex flex-col w-1/5 absolute top-full left-3/4 bg-white border border-blue-200 rounded-xl mt-20 cursor-pointer -translate-y-3/4"
          : "flex flex-col w-1/5 absolute top-full left-3/4 bg-white border border-blue-200 rounded-xl mt-20 cursor-pointer"
      }
    >
      <div
        className="flex items-center justify-between bg-blue-500 text-white p-3 rounded-t-xl"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          Chats
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      {open && (
        <div className="h-60 overflow-y-scroll">
          {pageState.state.otherUsers.map((e, i) => (
            <div
              key={e.id}
              className="flex w-full items-center py-1 px-3 cursor-pointer"
              onClick={() => {
                controlChatbox(
                  { name: e.name, img: e.profilepicture, id: e.id },
                  true
                );
              }}
            >
              <img src={e.profilepicture} className="w-7 rounded-3xl" />
              <p className="flex justify-between items-center w-full tracking-wide text-xs font-thin mx-2">
                <span>{e.name}</span>
                <span
                  className={
                    Math.random() * 2 < 1
                      ? "text-green-500 text-lg"
                      : "text-gray-500 text-lg"
                  }
                >
                  •
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
      {open && chatOpen && (
        <MiniChatBox
          toUser={toUser}
          controlChatbox={controlChatbox}
          putMessages={putMessages}
          getMessages={getMessages}
          curUserId={pageState.state.currentUser.id}
        />
      )}
    </div>
  );
}

export default ChatBox;
