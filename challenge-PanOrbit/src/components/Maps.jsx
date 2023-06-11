import React from "react";

function Maps({ coordinates }) {
  return (
    <div className="flex flex-col">
      <div>Maps Snap</div>
      <div className="flex text-right">
        <span>Lat : {coordinates.lat}</span>{" "}
        <span>Long :{coordinates.lng}</span>
      </div>
    </div>
  );
}

export default Maps;
