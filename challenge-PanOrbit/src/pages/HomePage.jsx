import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
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
  );
}

export default HomePage;
