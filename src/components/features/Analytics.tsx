"use client";

import React from "react";
import CountUp from "react-countup";

export const Analytics = () => {
  return (
    <div className="h-[20vh] w-full bg-primary shadow-2xl  absolute -skew-y-[3deg] z-50 -bottom-[10vh]">
      <div className="h-full max-w-9xl mx-auto flex flex-row justify-around items-center text-primary font-monument">
        <div className="flex flex-col gap-4 justify-center items-center text-3xl">
          Number of beacons
          <CountUp delay={2} end={29} duration={5} className="text-5xl" />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-3xl">
          Member club
          <CountUp delay={2} end={121} duration={5} className="text-5xl" />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-3xl">
          Mainland
          <CountUp delay={2} end={4} duration={5} className="text-5xl" />
        </div>
      </div>
    </div>
  );
};
