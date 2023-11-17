"use client";

import { Club, Balise } from "@prisma/client";
import React from "react";
import CountUp from "react-countup";

export const Analytics = ({
  clubs,
  beacons,
}: {
  clubs: Club[];
  beacons: Balise[];
}) => {
  return (
    <div className="h-[20vh] w-full bg-primary shadow-2xl px-4 lg:px-0  absolute -skew-y-[3deg] z-50 md:-bottom-[10vh] -bottom-[15vh]">
      <div className="h-full max-w-9xl mx-auto flex flex-row justify-around items-center text-primary font-monument">
        <div className="flex flex-col md:text-lg w-1/3 lg:w-auto gap-2 justify-center items-center lg:text-3xl text-xs">
          Number of beacons
          <CountUp
            delay={2}
            end={beacons.length}
            duration={5}
            className="lg:text-5xl md:text-lg text-xs"
          />
        </div>
        <div className="flex flex-col md:text-lg w-1/3 lg:w-auto gap-4 justify-center items-center lg:text-3xl text-xs">
          Member club
          <CountUp
            delay={2}
            end={clubs.length}
            duration={5}
            className="lg:text-5xl md:text-lg text-xs"
          />
        </div>
        <div className="flex w-1/3 flex-col md:text-lg lg:w-auto gap-4 justify-center items-center lg:text-3xl text-xs">
          Mainland
          <CountUp
            delay={2}
            end={4}
            duration={5}
            className="lg:text-5xl md:text-lg text-xs"
          />
        </div>
      </div>
    </div>
  );
};
