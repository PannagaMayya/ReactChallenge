import React from "react";
import { useNavigate } from "react-router-dom";
function DropDown({ userState }) {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col w-max justify-center items-center absolute top-10 -left-24 px-14 py-6 bg-white border border-slate-200 rounded-2xl shadow-2xl">
      <div className="flex flex-col justify-center items-center py-4">
        <img
          src={userState.currentUser.profilepicture}
          className="w-20 rounded-full"
        />
        <span className="text-gray-600 tracking-wide text-sm font-thin mt-1">
          {userState.currentUser.name}
        </span>
        <span className="text-gray-400 text-xs tracking-wide font-thin m-1">
          {userState.currentUser.email}
        </span>
      </div>
      {/* Other Users login */}
      {[0, 1].map((e, i) => (
        <div
          key={userState.otherUsers[i].id}
          className="flex w-full items-center p-1 py-2 border-t cursor-pointer"
          onClick={(ev) => {
            navigate("/profile", {
              state: {
                currentUser: userState.otherUsers[i],
                otherUsers: [
                  ...userState.otherUsers,
                  userState.currentUser,
                ].filter((obj) => userState.otherUsers[i].id !== obj.id),
              },
            });
          }}
        >
          <img
            src={userState.otherUsers[i].profilepicture}
            className="w-6 rounded-3xl"
          />
          <span className="tracking-wide text-xs font-thin ml-2">
            {userState.otherUsers[i].name}
          </span>
        </div>
      ))}
      <button
        className="rounded-full py-1 px-3 my-2 bg-red-600 text-white text-sm font-medium"
        onClick={(ev) => {
          navigate("/");
        }}
      >
        Sign out
      </button>
      <hr />
    </div>
  );
}

export default DropDown;
