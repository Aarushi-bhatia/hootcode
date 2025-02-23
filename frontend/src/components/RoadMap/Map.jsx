import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Map = ({questions}) => {
  const [questionsData, setQuestionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openTopic, setOpenTopic] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/roadmap") // Replace with the correct API URL
      .then((response) => response.json())
      .then((data) => {
        setQuestionsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  const toggleTopic = (topicName) => {
    setOpenTopic(openTopic === topicName ? null : topicName);
  };

  if (loading) {
    return <div className="text-center text-white">Loading...</div>; // Loading indicator
  }
  
 

if (questions === "Array") {
  return (
    <div className="rounded-lg shadow-lg overflow-auto h-[470px] bg-[#183A56] text-white w-[100%] p-6">
      {/* Prerequisite Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3">Prerequisite</h2>
        <p className="text-gray-300 mb-4">
          To solve these array problems, ensure you have a good understanding of the following concepts:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Understanding of Arrays and Indexing</li>
          <li>Basic knowledge of Loops and Iteration</li>
          <li>Familiarity with Binary Search Algorithm</li>
          <li>Sorting Techniques</li>
          <li>Two-pointer Technique</li>
          <li>Sliding Window Algorithm</li>
        </ul>
      </div>

      {/* Problems Table */}
      <div>
        <h2 className="text-2xl font-bold mb-3">Array Problems</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse bg-[#2D3748] rounded-lg text-sm">
            <thead>
              <tr className="bg-[#334155] text-gray-300">
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Problem</th>
                <th className="px-4 py-2 text-left">Difficulty</th>
                <th className="px-4 py-2 text-left">Solution</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                {
                  status: false,
                  star: true,
                  problem: "Two Sum",
                  difficulty: "Easy",
                  solution: true,
                  route: "practice/twosum",
                },
                {
                  status: false,
                  star: true,
                  problem: "Search Insert Position",
                  difficulty: "Easy",
                  solution: true,
                  route: "practice/search-insert",
                },
                {
                  status: false,
                  star: true,
                  problem: "Guess Number Higher Or Lower",
                  difficulty: "Easy",
                  solution: true,
                  route: "practice/guess-number",
                },
                {
                  status: false,
                  star: true,
                  problem: "Sqrt(x)",
                  difficulty: "Easy",
                  solution: true,
                  route: "practice/sqrtx",
                },
                {
                  status: false,
                  star: true,
                  problem: "Search a 2D Matrix",
                  difficulty: "Medium",
                  solution: true,
                  route: "practice/search-2d-matrix",
                },
                {
                  status: false,
                  star: true,
                  problem: "Koko Eating Bananas",
                  difficulty: "Medium",
                  solution: true,
                  route: "practice/koko-bananas",
                },
                {
                  status: false,
                  star: true,
                  problem: "Capacity to Ship Packages",
                  difficulty: "Medium",
                  solution: true,
                  route: "practice/capacity-to-ship",
                },
                {
                  status: false,
                  star: true,
                  problem: "Find Minimum In Rotated Sorted Array",
                  difficulty: "Medium",
                  solution: true,
                  route: "practice/find-minimum",
                },
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-600 last:border-none">
                  <td className="px-4 py-3">
                    <input type="checkbox" checked={item.status} readOnly />
                  </td>
                
                  <td className="px-4 py-3">
                    <Link
                      to={`/${item.route}`}
                      className="text-blue-400 hover:underline"
                    >
                      {item.problem}
                    </Link>
                  </td>
                  <td
                    className={`px-4 py-3 ${
                      item.difficulty === "Easy"
                        ? "text-green-400"
                        : item.difficulty === "Medium"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.difficulty}
                  </td>
                  <td className="px-4 py-3">
                  <button className="text-white px-2 py-1 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                          </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


  return (
    <div className="rounded-lg inline-block mt-4 shadow-lg mb-4 h-[65%] w-[100%] bg-[#183A56]">
          <div className="text-white p-4 space-y-4 overflow-auto max-h-full">
        {questionsData.map((topic) => (
          <div key={topic.name} className="border-b border-gray-500 pb-4">
            {/* Dropdown header */}
            <div
              className="flex justify-between items-center cursor-pointer p-2 bg-[#1E4C70] rounded-lg"
              onClick={() => toggleTopic(topic.name)}
            >
              <h2 className="font-bold text-lg">{topic.name}</h2>
              <span className="text-gray-300">
                {openTopic === topic.name ? "-" : "+"}
              </span>
            </div>

            {/* Dropdown content */}
            {openTopic === topic.name && (
              <div className="mt-4">
                {/* Table for questions */}
                <table className="table-auto w-full text-sm text-left">
                  <thead className="bg-[#2D5A82] text-gray-300">
                    <tr>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Problem</th>
                      <th className="px-4 py-2">Difficulty</th>
                      <th className="px-4 py-2">Solution</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#183A56] text-white">
                    {topic.questions.map((question) => (
                      <tr key={question.question_id} className="border-b border-gray-600">
                        {/* Status (e.g., completed) */}
                        <td className="px-4 py-2 text-start">
                        <input
    type="checkbox"
    className="w-4 h-4"
    checked={question.completed} // Bind this to your question's completed state
    //onChange={() => handleStatusChange(question.question_id)} // Handle change if needed
  />
                        </td>
                        
                        {/* Problem (linked) */}
                        <td className="px-4 py-2">
                          <a
                            href={question.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 cursor pointer underline"
                          >
                            {question.title}
                          </a>
                        </td>
                        {/* Difficulty */}
                        <td className="px-4 py-2">
                          <span
                            className={`${
                              question.difficulty === "Easy"
                                ? "text-green-400"
                                : question.difficulty === "Medium"
                                ? "text-yellow-400"
                                : "text-red-400"
                            }`}
                          >
                            {question.difficulty}
                          </span>
                        </td>
                        {/* Solution (icon) */}
                        <td className="px-4 py-2 text-start">
                          <button className="text-white px-2 py-1 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
</div>
  )
}

export default Map