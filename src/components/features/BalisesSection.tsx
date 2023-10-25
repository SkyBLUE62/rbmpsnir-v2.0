"use server";
import { FiltersHome } from "../map/FiltersHome";
import { MapHome } from "../map/MapHome";
import dynamic from "next/dynamic";

export const BalisesSection = () => {
  return (
    <div className="max-w-9xl h-screen w-full mx-auto ">
      <div className="py-10 flex flex-col justify-center gap-24 h-full w-full">
        <span className="flex items-center text-gray-300 justify-center font-monument font-bold text-5xl">
          The best spots in the world
        </span>

        <div className="flex flex-row items-center w-full justify-around relative">
          <FiltersHome />
          {/* @ts-expect-error Server Component */}
          <MapHome />

          <div className="h-1/2-screen w-[25%] bg-gray-300 shadow-2xl rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};
