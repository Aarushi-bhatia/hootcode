import React from "react";
import Menu from "./Menu";
import InputTag from "./InputTag";
import Map from "./Map";

const RoadMap = () => {
  return (
    <div>
    <div className="mt-4 max-w-7xl mx-auto flex min-h-screen">
      <Menu />
      <div className="ml-10 w-[70%]">
        <InputTag />
        {/* RoadMap*/}
      </div>
    </div>
    <footer className="bottom-0 p-4 font-semibold text-center text-white bg-transparent">
    HootCode @2025
  </footer>
  </div>
  );
};

export default RoadMap;
