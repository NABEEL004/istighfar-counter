"use client";
import { use, useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CountDisplay from "./components/CountDisplay";
import AddButton from "./components/AddButton";
import MinusButton from "./components/MinusButton";

export default function Home() {
  const [count, setCount] = useState(0);
  const [flow, setFlow] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(100);
  const [goalAchieved, setGoalAchieved] = useState(false);

  useEffect(() => {
    const localCount = localStorage.getItem("count");
    const localFlow = localStorage.getItem("flow") || "0";
    console.log("this is the localFlow, ", localFlow);
    const localDailyGoal = localStorage.getItem("dailyGoal");
    const lastUpdated = localStorage.getItem("lastUpdated");

    if (localCount) setCount(parseInt(localCount));
    if (localFlow) setFlow(parseInt(localFlow));
    if (localDailyGoal) setDailyGoal(parseInt(localDailyGoal));

    const today = new Date().toISOString().split("T")[0];

    if (lastUpdated) {
      if (lastUpdated !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const formattedYesterday = yesterday.toISOString().split("T")[0];

        if (lastUpdated === formattedYesterday) {
          if (
            localCount &&
            localDailyGoal &&
            parseInt(localCount) >= parseInt(localDailyGoal)
          ) {
            setFlow((prevFlow) => prevFlow + 1);
            localStorage.setItem("flow", (parseInt(localFlow) + 1).toString());
          } else {
            setFlow(0);
            localStorage.setItem("flow", "0");
          }
          setCount(0);
          localStorage.setItem("count", "0");
          localStorage.setItem("lastUpdated", today);
        }
      }
    }
  }, []);

  const handleAddClick = () => {
    setCount((prev) => prev + 1);
    localStorage.setItem("count", (count + 1).toString());
  };

  const handleSubtractClick = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      localStorage.setItem("count", (count - 1).toString());
    }
  };

  useEffect(() => {
    if (count >= dailyGoal) {
      setGoalAchieved(true);
    } else {
      setGoalAchieved(false);
    }
  }, [count, dailyGoal]);

  useEffect(() => {
    const localFlow = parseInt(localStorage.getItem("flow") || "0");
    if (goalAchieved) {
      setFlow(localFlow + 1);
    } else {
      setFlow(localFlow);
    }
  }, [goalAchieved]);

  return (
    <div data-theme="dark">
      <div className="flex flex-col gap-6 items-center justify-center h-[100dvh] w-screen ">
        <NavBar
          goalAchieved={goalAchieved}
          flow={flow}
          dailyGoal={dailyGoal}
          setDailyGoal={setDailyGoal}
        />
        <CountDisplay goalAchieved={goalAchieved} count={count} />
        <AddButton handleAddClick={handleAddClick} />
        <MinusButton handleSubtractClick={handleSubtractClick} />
      </div>
      <Footer />
    </div>
  );
}
