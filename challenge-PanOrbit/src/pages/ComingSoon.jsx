import React from "react";
import NavBar from "../components/NavBar";
import PageHeading from "../components/PageHeading";
import { useLocation, Navigate } from "react-router-dom";
function ComingSoon({ pageName }) {
  let curPageState = useLocation();

  return curPageState.state ? (
    <div className="flex m-10 h-screen">
      <NavBar pageName={pageName} pageState={curPageState.state} />
      <div className="flex basis-4/5 mx-7 p-2 flex-col ">
        <PageHeading pageName={pageName} userState={curPageState.state} />
        {/* Coming Soon Page Body */}
        <div className="flex mb-10 h-full justify-center items-center">
          <h1 className="text-6xl text-slate-200 font-bold">Coming Soon</h1>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
}

export default ComingSoon;
