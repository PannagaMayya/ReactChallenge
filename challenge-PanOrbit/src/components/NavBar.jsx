import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ pageName, pageState }) {
  let navigate = useNavigate();
  return (
    <div className="basis-1/5 flex flex-col justify-center items-center bg-gradient-to-b from-indigo-600 to-violet-600 rounded-3xl">
      {["Profile", "Posts", "Gallery", "ToDo"].map((e, i) => (
        <div
          key={e}
          className="w-8/12 py-3 text-left text-slate-400 font-medium cursor-pointer border-b border-slate-200"
          style={pageName == e ? { color: "white" } : {}}
          onClick={(ev) => {
            navigate("/" + e.toLowerCase(), { state: pageState });
          }}
        >
          {e}
        </div>
      ))}
    </div>
  );
}

export default NavBar;
