import React from "react";
import MapComponent from "../map/MapComponent";

const Map = () => {
  return (
    <div className="container mx-auto py-10 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        📍 Explore Sacred Locations
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Discover key locations from Hindu scriptures.
      </p>
      <MapComponent />
    </div>
  );
};

export default Map;
