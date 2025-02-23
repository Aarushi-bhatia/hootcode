import React, { useState } from "react";
import Map from "./Map";
import questionsData from "../../data/questions.json";

const InputTag = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const [tags, setTags] = useState([
    "Array",
    "String",
    "Linked List",
    "Stack",
    "Queue",
    "Tree",
    "Graph",
    "Hashing",
    "Heap",
    "Dynamic Programming",
    "Recursion",
    "Sorting Algorithms",
    "Searching Algorithms",
    "Greedy Algorithms",
    "Backtracking",
    "Divide and Conquer",
  ]);
  const [questions, setQuestions] = useState({}); 

  const handleSelectedTag = (tag) => {
    setSelectedTag(tag);
  };

  const handleRemoveTag = () => {
    setSelectedTag("");
    setQuestions([]); // Clear topic-specific data
  };

  const handleSearch = () => {
    if (selectedTag === "Array") {
      setQuestions("Array"); // Pass "Array" to show the dummy table
    } else {
      setQuestions(null); // Default to general roadmap
    }
  };


  return (
    <>
      <div className="flex max-h-52 gap-7 h-[30%]">
        <div className="rounded-lg shadow-lg mb-4 w-[60%] bg-[#183A56]">
          <h1 className="text-slate-200 text-center mt-2 p-4 font-semibold text-xl">
            Which topic do you want to learn?
          </h1>
          <div className="flex relative items-center ml-6 mt-4">
            <label>
              <input
                type="text"
                name="topicInput"
                placeholder="Enter a topic"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="ml-7 mt-4 p-2 w-80 bg-slate-600 rounded-lg text-white outline-none focus:ring-2 focus:ring-sky-500"
              />
              {selectedTag && (
                <div
                  className="absolute top-6 right-24 w-6 h-6 flex items-center justify-center cursor-pointer"
                  onClick={handleRemoveTag}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M16 8L8 16M8.00001 8L16 16"
                      className="stroke-slate-200 hover:stroke-slate-300"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              )}
            </label>
            <div
              className="rounded-full mt-4 ml-3 w-10 h-10 cursor-pointer bg-[#041d32]"
              onClick={handleSearch}
            >
              <button
                type="button"
                className="text-slate-500 mt-1 ml-1 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center dark:hover:text-slate-300"
              >
                <span className="sr-only">Search</span>
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5" />
                  <circle cx={11} cy={11} r={6} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-lg mb-4 w-[50%] bg-[#183A56]">
          <h1 className="text-slate-200 text-center mt-4 mb-2 font-semibold text-xl">
            Tags
          </h1>
          <div
            id="tags"
            className="p-2 mr-1 h-28 ml-2 flex flex-wrap max-h-48 overflow-y-auto"
          >
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`rounded-full m-1 text-slate-300 bg-slate-900 hover:bg-sky-700 px-3 py-1 inline-block cursor-pointer ${
                  selectedTag === tag ? "bg-sky-700" : ""
                }`}
                onClick={() => handleSelectedTag(tag)}
              >
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
        <Map questions={questions} />
    </>
  );
};

export default InputTag;
