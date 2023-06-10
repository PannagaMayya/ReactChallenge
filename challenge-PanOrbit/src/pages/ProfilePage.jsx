import React from "react";
import NavBar from "../NavBar";
import PageHeading from "../PageHeading";

function ProfilePage() {
  return (
    <div className="flex m-10 h-screen">
      <NavBar pageName={"Profile"} />
      <div className="flex basis-3/4 mx-10 p-2 flex-col ">
        <PageHeading
          pageName={"Profile"}
          userState={{
            name: "Leanne Graham",
            email: "Sincere@april.biz",
            profilepicture: "https://panorbit.in/wp-c…019/hotlink-ok/1001.jpeg",
            otherUsers: [],
          }}
        />
        <div className="flex mt-2">
          <div className="flex flex-col justify-center items-center basis-2/4 py-10 border-r border-slate-200">
            <img
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
              className="w-3/6 rounded-full"
            />
            <span className="font-bold m-2">Leanne Graham</span>
            <p className="flex flex-row py-2 w-full">
              <span className="basis-2/5 text-right">Username :</span>
              <span className="basis-3/5 font-bold ml-2">Leanne Graham</span>
            </p>
            <p className="flex flex-row py-2 w-full">
              <span className="basis-2/5 text-right">email :</span>
              <span className="basis-3/5 font-bold ml-2">aaa@aaaaaaaa.com</span>
            </p>
            <p className="flex flex-row py-2 w-full">
              <span className="basis-2/5 text-right">Phone :</span>
              <span className="basis-3/5 font-bold ml-2">99999999</span>
            </p>

            <h2 className="border-t border-slate-200 mt-5 py-2 w-10/12 text-center">
              Company
            </h2>
            <p className="flex flex-row py-2 w-full">
              <span className="basis-2/5 text-right">Name :</span>
              <span className="basis-3/5 font-bold ml-2">aaa@aaaaaaaa.com</span>
            </p>
            <p className="flex flex-row py-2 w-full">
              <span className="basis-2/5 text-right">catchphrase :</span>
              <span className="basis-3/5 font-bold ml-2">
                Multi-layered cient-server neutral
              </span>
            </p>
          </div>
          <div className="flex flex-col basis-3/4 p-4">
            <h2>Address : </h2>
            <p className="flex flex-row py-2">
              <span className="basis-2/5 text-right">Street :</span>
              <span className="basis-3/5 font-bold ml-2">Kulas Light</span>
            </p>
            <p className="flex flex-row py-2">
              <span className="basis-2/5 text-right">Suite :</span>
              <span className="basis-3/5 font-bold ml-2">Apt. 556</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
