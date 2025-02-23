import React from "react";
import CodeEditor from "./CodeEditor";
import Problem from "./Problem";

const Practice = () => {
  return (
    <div className="mt-4 max-w-7xl mx-auto h-full overflow-hidden">
      <div className="flex gap-2 ml-4 mr-4">
         <Problem /> 
        <CodeEditor />
      </div>
    </div>
  );
};

export default Practice;
