import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TreeNode = ({ node, level = 0, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;
  
  return (
    <div className={`relative ${level > 0 ? 'ml-8' : ''}`}>
      {level > 0 && (
        <>
          <div className="absolute -left-8 top-1/2 w-8 h-px bg-gray-600"></div>
          <div className="absolute -left-8 top-0 bottom-1/2 w-px bg-gray-600"></div>
        </>
      )}
      
      <div className="relative">
        <button
          onClick={() => {
            if (hasChildren) {
              setIsExpanded(!isExpanded);
            } else {
              onSelect(node);
            }
          }}
          className={`
            w-full mb-4 p-4 rounded-lg
            bg-gradient-to-r from-[#1E4C70] to-[#183A56]
            transform transition-all duration-200 hover:scale-[1.02]
            flex items-center justify-between
            text-white relative z-10
          `}
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{node.icon}</span>
            <span className="text-lg font-semibold">{node.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            {!hasChildren && (
              <span className="text-sm bg-black/20 px-3 py-1 rounded-full">
                {node.questionCount} problems
              </span>
            )}
            {hasChildren && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform duration-200 ${
                  isExpanded ? 'transform rotate-90' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </button>
        
        {hasChildren && isExpanded && (
          <div className="relative">
            {node.children.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
                level={level + 1}
                onSelect={onSelect}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Map = () => {
  const [learningPath, setLearningPath] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState('2025-02-23 09:27:17');
  const currentUser = 'Aarushi-bhatia';

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/learning-path');
        setLearningPath(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();

    // Update time every second
    const timer = setInterval(() => {
      const now = new Date();
      const formatted = now.toISOString().replace('T', ' ').slice(0, 19);
      setCurrentDateTime(formatted);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCheckboxChange = async (questionId, completed) => {
    try {
      await axios.post('http://127.0.0.1:8000/update-progress', {
        questionId,
        completed,
        userId: currentUser
      });
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0F172A]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const Header = () => (
    <div className="flex items-center justify-between p-4 bg-[#183A56] text-white rounded-lg shadow-md mb-6">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-blue-400 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <span className="text-sm font-medium text-gray-300">UTC:</span>
          <span className="ml-2 font-mono text-sm">{currentDateTime}</span>
        </div>
      </div>
      <div className="flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-blue-400 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
          />
        </svg>
        <span className="text-sm font-medium text-gray-300">User:</span>
        <span className="ml-2 font-mono text-sm">{currentUser}</span>
      </div>
    </div>
  );

  if (selectedTopic) {
    return (
      <div className="min-h-screen bg-[#0F172A] p-6">
        <Header />
        <div className="rounded-lg shadow-lg overflow-auto h-[470px] bg-[#183A56] text-white w-full p-6">
          <button 
            onClick={() => setSelectedTopic(null)}
            className="mb-4 flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Topics
          </button>

          <div className="mb-6 space-y-4">
            <h2 className="text-2xl font-bold">Prerequisites for {selectedTopic.name}</h2>
            <div className="bg-[#1E4C70] rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {selectedTopic.prerequisites?.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Problems</h2>
            <div className="overflow-x-auto rounded-lg">
              <table className="w-full border-collapse bg-[#2D3748] text-sm">
                <thead>
                  <tr className="bg-[#334155] text-gray-300">
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Problem</th>
                    <th className="px-4 py-3 text-left">Difficulty</th>
                    <th className="px-4 py-3 text-left">Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {selectedTopic.questions?.map((question, index) => (
                    <tr key={index} className="hover:bg-[#2D4764] transition-colors duration-150">
                      <td className="px-4 py-3">
                        <input 
                          type="checkbox" 
                          checked={question.completed} 
                          onChange={(e) => handleCheckboxChange(question.id, e.target.checked)} 
                          className="w-4 h-4 rounded border-gray-500 text-blue-500 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <Link 
                          to={question.route} 
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-150"
                        >
                          {question.title}
                        </Link>
                      </td>
                      <td className={`px-4 py-3 ${
                        question.difficulty === "Easy" 
                          ? "text-green-400" 
                          : question.difficulty === "Medium" 
                          ? "text-yellow-400" 
                          : "text-red-400"
                      }`}>
                        {question.difficulty}
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-gray-300 hover:text-white transition-colors duration-150">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/>
                            <path d="M15 3v4a2 2 0 0 0 2 2h4"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] p-6">
      <Header />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Learning Path</h1>
        <div className="space-y-4">
          {learningPath.map((topic) => (
            <TreeNode
              key={topic.id}
              node={topic}
              onSelect={setSelectedTopic}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;