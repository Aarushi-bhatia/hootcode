import React from "react";

const Menu = () => {
  const user = {
    name: "Aarushi Bhatia",
    avatar: "/default_avatar.png",
    stats: [
      { level: "Easy", completed: 9, total: 60 },
      { level: "Medium", completed: 23, total: 60 },
      { level: "Hard", completed: 2, total: 60 },
    ],
    badges: [],
  };

  const { name, avatar, stats, badges } = user;

  return (
    <div className=" rounded-lg ml-12 mb-4 shadow-lg max-h-min w-[18%] bg-[#183A56]">
      <h1 className="text-slate-200 text-center p-5 font-semibold text-xl">
        Menu
      </h1>
      <div className="rounded-full mr-auto ml-auto mt-4 w-32 h-32 bg-[#041d32] shadow-lg">
        <img src={avatar || "default_avatar.png"} alt="avatar" />
      </div>
      <h2 className="text-center text-slate-200 m-2">{name || "User Name"}</h2>
      <div className="rounded-lg text-slate-300 p-4 font-semibold shadow-lg bg-[#0B1120] w-52 h-auto mr-auto ml-auto m-5">
        <h1 className="text-base text-center mb-4">Stats</h1>

        {stats.map((stat, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-2 text-sm">
              <span>{stat.level}</span>
              <span>
                {stat.completed} / {stat.total}
              </span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  stat.level === "Easy"
                    ? "bg-green-500"
                    : stat.level === "Medium"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${(stat.completed / stat.total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-lg text-center shadow-lg text-slate-300 p-4 font-semibold bg-[#0B1120] w-52 h-36 mr-auto ml-auto m-5">
        <h1 className="text-base">Badges</h1>
        {badges.length > 0 ? (
          <div className="mt-4">
            {badges.map((badge, index) => (
              <div key={index} className="text-slate-400">
                {badge}
              </div>
            ))}
          </div>
        ) : (
          <h3 className="text-slate-400  mt-4">No Badges</h3>
        )}
      </div>
    </div>
  );
};

export default Menu;
