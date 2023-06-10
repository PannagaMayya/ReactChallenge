import React from "react";

function PageHeading({ pageName, userState }) {
  return (
    <div className="flex justify-between py-4 border-b border-slate-200">
      <div className="">{pageName}</div>
      <div className="flex items-center cursor-pointer">
        <img
          src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
          className="w-7 rounded-3xl"
        />
        <span className="text-sm font-thin ml-2">{userState.name}</span>
      </div>
    </div>
  );
}

export default PageHeading;
