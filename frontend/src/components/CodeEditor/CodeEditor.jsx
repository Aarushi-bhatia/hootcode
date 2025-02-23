import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [isLoading, setIsLoading] = useState(false);
  const [testResults, setTestResults] = useState([]);

  const languageMap = {
    python: 71,
    cpp: 54,
    java: 62,
  };

  // Default code templates
  const defaultCodes = {
    python: `def main():\n    print("Hello World!")\n\nif __name__ == "__main__":\n    main()`,
    cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello World!";\n    return 0;\n}`,
    java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}`,
  };


/*   useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/problems/1'); // Replace with your API endpoint
        const data = await response.json();
        setProblem(data);
        setCode(data.starterCode[language] || '');
      } catch (error) {
        console.error('Failed to fetch problem:', error);
      }
    };
    fetchProblem();
  }, [language]); */

  useEffect(() => {
    setCode(defaultCodes[language]);
  }, [language]);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Send code to your backend for testing
      const response = await axios.post("http://localhost:8000/api/submissions", {
        code: code,
        language: language,
      });

      setTestResults(response.data.results);
    } catch (error) {
      console.error("Submission failed:", error);
      // You might want to show an error message to the user here
      setTestResults([]);
    } finally {
      setIsLoading(false);
    }
  };;


  return (
    <div className="w-[55%] border-slate-400 border rounded-xl bg-slate-950 max-w-7xl mx-auto px-4 py-2">
      <div className="flex gap-4 mb-3">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-4 py-2 text-sm border border-gray-300 rounded-md bg-white cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`px-6 py-2 text-sm text-white rounded-md ${
            isLoading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          }`}
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>
      </div>

 {/* Code Editor */}
      <div className="border border-gray-300 rounded-md overflow-hidden mb-4">
        <Editor
          height="45vh"
          language={language}
          value={code}
          onChange={setCode}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            automaticLayout: true,
            suggestOnTriggerCharacters: true,
            tabSize: 4,
            formatOnType: true,
            formatOnPaste: true,
          }}
        />
      </div>

      <div className="bg-gray-800 p-4 rounded-md">
        <h3 className="text-white text-lg font-medium mb-4">Test Results</h3>
        <div className="space-y-4">
          {testResults.map((result, index) => (
            <div
              key={index}
              className={`p-4 rounded-md ${
                result.passed
                  ? "bg-green-900/30 border border-green-500"
                  : "bg-red-900/30 border border-red-500"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">Test Case {index + 1}</span>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    result.passed
                      ? "bg-green-500/20 text-green-300"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {result.passed ? "Passed" : "Failed"}
                </span>
              </div>
              {!result.passed && (
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">
                    <span className="font-medium text-white">Input:</span>{" "}
                    {result.input}
                  </div>
                  <div className="text-gray-300">
                    <span className="font-medium text-white">Expected:</span>{" "}
                    {result.expectedOutput}
                  </div>
                  <div className="text-gray-300">
                    <span className="font-medium text-white">Your Output:</span>{" "}
                    {result.actualOutput}
                  </div>
                </div>
              )}
            </div>
          ))}
          {testResults.length === 0 && (
            <div className="text-gray-400 text-center py-4">
              Run your code to see test results
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
