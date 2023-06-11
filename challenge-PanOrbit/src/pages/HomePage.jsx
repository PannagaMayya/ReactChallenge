import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 curvy">
        <div className="overflow-y-scroll absolute bg-white rounded-xl p-10 w-4/12 h-4/5 top-20 inset-x-1/3 shadow-2xl z-10">
          <h1 className="text-base text-center tracking-wide text-gray-600 font-semibold">
            Select an account
          </h1>

          <div className="mt-6">
            {users.length < 1 ? (
              <div className="text-center text-xl mt-16">Loading...</div>
            ) : (
              users.map((e, i) => (
                <div
                  key={e.id}
                  className="flex items-center p-1 py-2 border-b-2 cursor-pointer"
                  onClick={(event) => {
                    navigate("/profile", {
                      state: {
                        currentUser: e,
                        otherUsers: users.filter((obj) => e.id !== obj.id),
                      },
                    });
                  }}
                >
                  <img src={e.profilepicture} className="w-7 rounded-3xl" />
                  <span className="text-sm text-gray-600 font-medium ml-2">
                    {e.name}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: "relative",
          top: "-251px",
        }}
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,32L48,69.3C96,107,192,181,288,202.7C384,224,480,192,576,197.3C672,203,768,245,864,245.3C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

export default HomePage;
