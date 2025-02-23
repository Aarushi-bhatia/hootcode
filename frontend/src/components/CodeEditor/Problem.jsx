import React, { useEffect, useState } from "react";
import Owlie from "../Owlie/Owlie";

const Problem = () => {
  const [activeTab, setActiveTab] = useState("Problem");
  const [questionData, setQuestionData] = useState({});
  const questionId = "2";

  const tabs = ["Problem", "Owlie's Help"];

  useEffect(() => {
    import("../../data/questions.json")
      .then((module) => {
        setQuestionData(module.default[questionId]); // Access `module.default`
      })
      .catch((err) => console.error("Failed to load questions:", err));
  }, [questionId]);  

  const renderContent = () => {
    if (!questionData.title) {
      return <p>Loading...</p>; // Display this while data is being fetched
    }

    if (activeTab === "Problem") {
      return (
        <>
          <h1 className="text-3xl font-semibold">{questionData.title}</h1>
          <h2
            className={`font-semibold mt-4 ${
              questionData.difficulty === "Easy"
                ? "text-green-500"
                : questionData.difficulty === "Medium"
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            {questionData.difficulty}
          </h2>
          <p className="mt-4">{questionData.description}</p>
          {questionData.examples.map((example, index) => (
            <div key={index} className="mt-4">
              <div className="font-semibold mt-4 text-lg">
                Example {index + 1}:
              </div>
              <div className="bg-slate-950 p-4 mt-4 font-mono text-[#4EC9B0] text-sm">
                <h2>Input: {example.input}</h2>
                <h2>Output: {example.output}</h2>
              </div>
            </div>
          ))}
          <div className="font-semibold mt-4 text-lg">Constraints:</div>
          <ul className="list-disc list-inside mt-4 mb-8">
            {questionData.constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </>
      );
    }
    if (activeTab === "Owlie's Help") {
      return <Owlie />;
    }
    return <p>Invalid Tab.</p>;
  };

  return (
    <div
      id="questions"
      className="w-[45%] h-[485px] overflow-hidden border-slate-400 border rounded-xl text-white bg-slate-900"
    >
      <div className="sticky top-0 z-10">
        <div className="flex gap-6 py-2 px-4 cursor-pointer border-b">
          {tabs.map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "text-white font-semibold"
                  : "text-slate-300"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div id="questions" className="overflow-y-auto h-[calc(100%-3rem)] p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Problem;
