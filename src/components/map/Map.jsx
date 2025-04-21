import React from "react";
import MapComponent from "../map/MapComponent";

const Map = () => {
  return (
    <div className="container w-full py-10 px-25 text-center bg-[#F4E4BA] h-full min-h-screen min-w-full">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        📍 Explore Sacred Locations
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Discover key locations from Hindu scriptures.
      </p>
      <div className="flex justify-center items-center h-full z-0">
      <MapComponent />
      </div>
    </div>
  );
};

export default Map;
