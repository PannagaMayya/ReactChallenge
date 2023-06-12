import React, { useState } from "react";
import NavBar from "../components/NavBar";
import PageHeading from "../components/PageHeading";
import Maps from "../components/Maps";
import { useLocation, Navigate } from "react-router-dom";

function ProfilePage() {
  let pageState = useLocation();

  return pageState.state ? (
    <div className="flex m-10 h-screen">
      <NavBar pageName={"Profile"} pageState={pageState.state} />
      <div className="flex basis-4/5 mx-7 p-2 flex-col ">
        <PageHeading pageName={"Profile"} userState={pageState.state} />
        {/* Profile Page Body */}
        <div className="flex mt-2">
          {/* Profile Page Personal and Company Details */}
          <div className="flex flex-col justify-center items-center basis-2/4 py-4 border-r border-slate-200">
            <img
              src={pageState.state.currentUser.profilepicture}
              className="w-3/6 rounded-full"
            />
            <span className="text-gray-600 font-semibold m-2">
              {pageState.state.currentUser.name}
            </span>
            {["Username", "Email", "Phone", "Website"].map((personal) => (
              <p key={personal} className="flex flex-row py-2 w-full text-base">
                <span className="basis-2/6 text-right text-gray-400	font-normal">
                  {personal} :
                </span>
                <span className="basis-4/6 text-gray-600 font-semibold ml-2">
                  {personal === "Phone"
                    ? pageState.state.currentUser["phone"]
                        .split(" ")[0]
                        .split("-")
                        .join("")
                    : pageState.state.currentUser[personal.toLowerCase()]}
                </span>
              </p>
            ))}
            <h2 className="border-t border-slate-200 mt-3 py-1 w-10/12 text-center text-gray-400	font-normal">
              Company
            </h2>
            {["Name", "catchphrase", "bs"].map((company) => (
              <p key={company} className="flex flex-row py-2 w-full text-base">
                <span className="basis-2/6 text-right text-gray-400	font-normal">
                  {company} :
                </span>
                <span className="basis-4/6 text-gray-600 font-semibold ml-2">
                  {
                    pageState.state.currentUser.company[
                      company === "catchphrase"
                        ? "catchPhrase"
                        : company.toLowerCase()
                    ]
                  }
                </span>
              </p>
            ))}
          </div>
          {/* Profile Address Details */}
          <div className="flex flex-col basis-3/4 p-4 ml-6">
            <h2 className="mb-3 text-gray-400	font-normal">Address : </h2>
            {["Street", "Suite", "City", "Zipcode"].map((address) => (
              <p key={address} className="flex flex-row p-2 text-base">
                <span className="basis-1/6 text-right text-gray-400	font-normal">
                  {address} :
                </span>
                <span className="basis-5/6 text-gray-600 font-semibold ml-2">
                  {pageState.state.currentUser.address[address.toLowerCase()]}
                </span>
              </p>
            ))}

            <Maps coordinates={pageState.state.currentUser.address.geo} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
}

export default ProfilePage;
