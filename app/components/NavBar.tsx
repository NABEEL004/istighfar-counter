import React, { useState } from "react";
import WaterfallIcon from "../assets/waterfall.png";

import { XMarkIcon } from "@heroicons/react/24/solid";

import Image from "next/image";

type NavBarProps = {
  goalAchieved: boolean;
  flow: number;
  dailyGoal: number;
  setDailyGoal: (goal: number) => void;
};

const DailyNumbers = [10, 100, 1000];

const NavBar = ({
  goalAchieved,
  flow,
  dailyGoal,
  setDailyGoal,
}: NavBarProps) => {
  const handleInputClick = (number: number) => {
    setDailyGoal(number);
    localStorage.setItem("dailyGoal", number.toString());
    const drawerCheckbox = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      setTimeout(() => {
        drawerCheckbox.checked = false;
      }, 200);
    }
  };

  return (
    <div className="absolute top-0 flex justify-between w-screen px-4 py-4">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <label
        htmlFor="my-drawer"
        className="btn btn-square btn-ghost drawer-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 flex flex-col items-center justify-around py-12 lg:py-24 text-base-content min-h-full w-screen md:w-96 p-4">
          {/* Sidebar content here */}
          <label
            htmlFor="my-drawer"
            className="drawer-button text-3xl font-thin absolute top-4 right-4 cursor-pointer"
          >
            <XMarkIcon height={36} width={36} />
          </label>
          <div>
            <h2 className="text-3xl font-bold text-center">
              Daily Istighfar App
            </h2>
          </div>
          <div className="flex flex-col gap-4 items-center m-0 p-0">
            <h2 className="text-2xl font-medium hover:bg-transparent active:bg-transparent">
              Daily Goal
            </h2>
            <div className="w-4/5 text-center">
              Set a daily goal by choosing one of the options below:
            </div>
            <div>
              <div className="join gap-0 m-0 p-0">
                {DailyNumbers.map((number) => (
                  <label
                    key={number}
                    className="drawer-button"
                    htmlFor="my-drawer"
                  >
                    <input
                      className="join-item btn btn-outline w-24 bg-base-100"
                      type="radio"
                      name="options"
                      aria-label={number.toString()}
                      checked={dailyGoal === number}
                      onClick={() => {
                        handleInputClick(number);
                      }}
                      onChange={() => {}}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[85%] text-center text-base lg:text-lg bg-base-300 p-4 rounded-lg">
            Ibn &apos; Abbas (May Allah be pleased with them) said: The Messenger of
            Allah (ﷺ) said, &ldquo;If anyone constantly seeks pardon (from Allah),
            Allah will appoint for him a way out of every distress and a relief
            from every anxiety, and will provide sustenance for him from where
            he expects not.&rdquo; <br /> <br />
            [Abu Dawud].
          </div>
        </div>
      </div>
      <div className="card bg-white bg-opacity-10 shadow-xl ">
        <div className="card-body flex flex-row gap-2 items-center justify-center p-4">
          <Image
            className={!goalAchieved ? "grayscale" : ""}
            src={WaterfallIcon}
            alt="Icon of a river"
            height={32}
            width={32}
          />
          <div className="stat-value text-xl font-semibold">{flow}</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
