"use client"
import { useEffect, useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import RiverIcon from "./assets/river.png"
import WaterfallIcon from "./assets/waterfall.png"

import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(0);
  const [flow, setFlow] = useState(0);
  const [goalAchieved, setGoalAchieved] = useState(false);

  const handleAddClick = () => {
    setCount(prev => prev + 1);
  }

  const handleSubtractClick = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  }

  useEffect(() => {
    if (count >= 100) {
      setGoalAchieved(true);
    }
    else {
      setGoalAchieved(false);
    }
  }, [count]);

  useEffect(() => {
    if (goalAchieved) {
      setFlow(1);
    }
    else {
      setFlow(0);
    }
  }, [goalAchieved]);


  return (
    <div data-theme="dark">
      <div className="flex flex-col gap-6 items-center justify-center h-[100dvh] w-screen ">
        <div className="absolute top-0 flex justify-between w-screen px-4 py-4">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
          <div className="card bg-white bg-opacity-10 shadow-xl ">
            <div className="card-body flex flex-row gap-2 items-center justify-center p-4">
              <Image className={!goalAchieved ? "grayscale" : ""} src={WaterfallIcon} alt="Icon of a river" height={32} width={32}/>
              <div className="stat-value text-xl font-semibold">{flow}</div>
            </div>
          </div>
        </div>
      <div className="stats shadow">
        <div className={`stat items-center flex flex-col ${goalAchieved ? " text-yellow-500" : ""}`}>
          <div className="stat-title">Daily Istighfar</div>
          <div className="stat-value text-6xl">{count}</div>
        </div>
      </div>
        <button onClick={handleAddClick} className="btn btn-primary btn-circle h-48 w-48"><PlusIcon height={80} width={80} /></button>
        <button onClick={handleSubtractClick} className="btn btn-outline btn-circle h-12 w-12"><MinusIcon height={20} width={20} /></button>
      </div>
      
      <footer className="footer footer-center bg-base-300 text-base-content p-4 bottom-0 absolute">
        <aside>
          <p>Copyright © Nabeel Muhammad {new Date().getFullYear()} </p>
        </aside>
      </footer>
    </div>
  );
}
