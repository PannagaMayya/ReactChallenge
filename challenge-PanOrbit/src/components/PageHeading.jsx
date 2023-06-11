import React, { useState } from "react";
import DropDown from "./DropDown";

function PageHeading({ pageName, userState }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between py-4 border-b border-slate-200">
      <div className="text-gray-600 font-semibold">{pageName}</div>
      <div
        className="flex items-center cursor-pointer relative"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img
          src={userState.currentUser.profilepicture}
          className="w-7 rounded-3xl"
        />
        <span className="text-sm text-gray-600 tracking-wide font-thin ml-2">
          {userState.currentUser.name}
        </span>
        {open && <DropDown userState={userState} />}
      </div>
    </div>
  );
}

export default PageHeading;
