import Hero from "./components/HomePage/Hero";
import Practice from "./components/CodeEditor/Practice";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import RoadMap from "./components/RoadMap/RoadMap";
import Navbar from "./components/Navbar/Navbar";
import ViewProfile from "./components/Navbar/ViewProfile";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <div className=" min-h-screen inset-0  bg-slate-50 dark:bg-[#0B1120]">
      <div
          className="absolute bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
          }}
        ></div> 
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/practice/twosum" element={<Practice />} />{" "}
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
