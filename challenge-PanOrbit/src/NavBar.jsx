import React from "react";

function NavBar({ pageName }) {
  return (
    <div className="basis-1/4 flex flex-col justify-center items-center bg-gradient-to-b from-indigo-600 to-violet-600 rounded-3xl">
      {["Profile", "Posts", "Gallery", "ToDo"].map((e, i) => (
        <div
          key={e}
          className="w-8/12 py-3 text-left text-slate-400 font-medium cursor-pointer border-b border-slate-200"
          style={pageName == e ? { color: "white" } : {}}
        >
          {e}
        </div>
      ))}
    </div>
  );
}

export default NavBar;
