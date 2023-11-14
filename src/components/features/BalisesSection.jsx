"use server";
import prisma from "../../../prisma/db/prisma";
import dynamic from "next/dynamic";

import { FiltersHome } from "../map/FiltersHome";
import { BalisesTab } from "./BalisesTab";
const MapHome = dynamic(() => import("../map/MapHome"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});
import { MapSkeleton } from "../loading/MapSkeleton";
export const BalisesSection = async () => {
  const beacons = await prisma.balise.findMany({
    where: {
      visible: true,
    },
    orderBy: {
      create_at: "desc",
    },
  });

  return (
    beacons && (
      <div className="max-w-9xl h-screen w-full mx-auto ">
        <div className="py-10 flex flex-col justify-center gap-24 h-full w-full">
          <span className="flex items-center text-gray-300 justify-center font-monument font-bold text-5xl">
            The best spots in the world
          </span>

          <div className="flex flex-row items-center w-full justify-around relative">
            <FiltersHome />
            {/* @ts-expect-error Server Component */}
            <MapHome beacons={beacons} />
            <BalisesTab beacons={beacons} />
          </div>
        </div>
      </div>
    )
  );
};
