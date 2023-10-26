"use server";
import { FiltersHome } from "../map/FiltersHome";
import { MapHome } from "../map/MapHome";
import { BalisesTab } from "./BalisesTab";

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
          <BalisesTab />
        </div>
      </div>
    </div>
  );
};
