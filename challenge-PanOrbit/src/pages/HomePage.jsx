import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 curvy">
        <div className="overflow-y-scroll absolute bg-white rounded-xl p-10 w-4/12 h-4/5 top-20 inset-x-1/3 shadow-2xl z-10">
          <h1 className="text-lg text-center tracking-wide font-medium">
            Select an account
          </h1>

          <div className="mt-6">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
              <div
                key={i}
                className="flex items-center p-1 py-2 border-b-2 cursor-pointer"
              >
                <img
                  src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
                  className="w-7 rounded-3xl"
                />
                <span className="text-sm font-thin ml-2">Leanne Graham</span>
              </div>
            ))}
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
          fill-opacity="1"
          d="M0,32L48,69.3C96,107,192,181,288,202.7C384,224,480,192,576,197.3C672,203,768,245,864,245.3C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

export default HomePage;
