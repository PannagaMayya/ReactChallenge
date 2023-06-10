import React from "react";
import NavBar from "../NavBar";
import PageHeading from "../PageHeading";
function ComingSoon({ pageName }) {
  return (
    <div className="flex m-10 h-screen">
      <NavBar pageName={pageName} />
      <div className="flex basis-3/4 mx-10 p-2 flex-col ">
        <PageHeading
          pageName={pageName}
          userState={{
            name: "Leanne Graham",
            email: "Sincere@april.biz",
            profilepicture: "https://panorbit.in/wp-c…019/hotlink-ok/1001.jpeg",
            otherUsers: [],
          }}
        />
        <div className="flex mt-2 h-full justify-center items-center">
          <h1 className="text-6xl text-slate-200 font-bold">Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
