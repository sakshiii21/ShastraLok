import React, { useState } from "react";

export function Book({ href }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="BookContainer w-[200px] h-[260px] m-[30px] flex items-center justify-center perspective-[900px]">
      <div
        className={`Book w-[200px] h-[260px] relative transform transition-transform duration-500 ${
          isHovered ? "rotate-y-0" : "rotate-y-30"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Front Cover */}
        <img
          src={href}
          alt="Book Cover"
          className="FrontCover w-full h-full absolute rounded-r rounded-l-[3px] shadow-lg"
        />
        
        {/* Pages */}
        <div className="Pages bg-white h-[248px] w-[50px] top-[6px] absolute left-0 shadow-md" />

        {/* Back Cover */}
        <div className="BackCover bg-[#01060f] h-[260px] w-[200px] left-0 absolute rounded-r shadow-lg" />
      </div>
    </div>
  );
}
