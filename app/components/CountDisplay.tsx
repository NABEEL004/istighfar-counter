import React from "react";

type CountDisplayProps = {
  goalAchieved: boolean;
  count: number;
};

const CountDisplay = ({ goalAchieved, count }: CountDisplayProps) => {
  return (
    <div className="stats shadow">
      <div
        className={`stat items-center flex flex-col ${
          goalAchieved ? " text-yellow-500" : ""
        }`}
      >
        <div className="stat-title">Daily Istighfar</div>
        <div className="stat-value text-6xl">{count}</div>
      </div>
    </div>
  );
};

export default CountDisplay;
