import React from "react";

function Maps({ coordinates }) {
  return (
    <div className="flex flex-col">
      <div className="pl-4">
        <iframe
          src={
            "http://maps.google.com/maps?q=" +
            coordinates.lat +
            "," +
            coordinates.lng +
            "&z=101&output=embed"
          }
          height="300"
          width="450"
          className="rounded-2xl"
        ></iframe>
      </div>
      <div className="flex my-2 space-x-4 place-self-end">
        <span className="text-xs text-gray-400 tracking-wide font-thin">
          Lat :{" "}
          <strong className="font-semibold text-gray-600">
            {parseFloat(coordinates.lat)}
          </strong>
        </span>{" "}
        <span className="text-xs text-gray-400 tracking-wide font-thin">
          Long :{" "}
          <strong className="font-semibold text-gray-600">
            {parseFloat(coordinates.lng)}
          </strong>
        </span>
      </div>
    </div>
  );
}

export default Maps;
