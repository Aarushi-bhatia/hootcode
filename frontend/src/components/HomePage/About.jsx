import React from "react";

const About = () => {
  return (
    <div className=" h-[100vh] inset-0 bg-slate-50 dark:bg-[#0B1120] dark:bg-gradient-to-b dark:from-[#0B1120] dark:via-[#0D1A2D] dark:to-[#183A56] ">
      <div className="relative mx-auto flex flex-col min-h-screen max-w-6xl items-center justify-center p-4 py-12 sm:p-6 sm:py-20">
        <h1 className="text-white text-4xl text-center font-bold mb-4 max-w-3xl px-4">
          About HootCode
        </h1>
        <p className="text-slate-400 text-xl mt-2 leading-relaxed text-center">
        Welcome to HootCode! Meet Owlie, your friendly AI-powered coding guide, here to make your learning journey fun and interactive. Owlie provides real-time hints, reviews your code, and keeps you motivated every step of the way. Whether you're a beginner or an experienced coder, HootCode offers interactive learning paths, a safe code-testing sandbox, and personalized progress-tracking flowcharts to help you grow with confidence. Perfect for self-learners, bootcamps, and institutions, HootCode bridges the gaps in traditional coding education and keeps you engaged as you master new skills. Let’s code together!
        </p>
        <div className="relative p-14 max-w-7xl flex items-center justify-center">
          <div className="grid grid-cols-3 gap-8">
            
            <div className="bg-slate-400 w-64 h-32 rounded-lg shadow-2xl transition-transform transform duration-300 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search-code text-sky-950 w-12 mt-4 ml-auto mr-auto h-auto"
              >
                <path d="m13 13.5 2-2.5-2-2.5" />
                <path d="m21 21-4.3-4.3" />
                <path d="M9 8.5 7 11l2 2.5" />
                <circle cx="11" cy="11" r="8" />
              </svg>
              <h1 className="text-center p-2 text-sky-950 font-semibold">AI Driven Hints</h1>

            </div>
            <div className="bg-slate-400 w-64 h-32 rounded-lg shadow-2xl transition-transform transform duration-300 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-bug text-sky-950 w-12 mt-4 ml-auto mr-auto h-auto"
              >
                <path d="m8 2 1.88 1.88" />
                <path d="M14.12 3.88 16 2" />
                <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
                <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
                <path d="M12 20v-9" />
                <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
                <path d="M6 13H2" />
                <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
                <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
                <path d="M22 13h-4" />
                <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
              </svg>
              <h1 className="text-center p-2 text-sky-950 font-semibold">Code Reviewing</h1>
            </div>
            <div className="bg-slate-400 w-64 h-32 rounded-lg shadow-2xl transition-transform transform duration-300 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-brain text-sky-950 w-12 mt-4 ml-auto mr-auto h-auto"
              >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                <path d="M19.967 17.484A4 4 0 0 1 18 18" />
              </svg>
              <h1 className="text-center p-2 text-sky-950 font-semibold">Interactive Roadmaps</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
