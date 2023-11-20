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
      <div className="max-w-9xl lg:h-screen h-auto py-4 lg:py-0 px-4 lg:px-0 w-full">
        <div className="py-10 flex flex-col justify-center items-center gap-24 h-full w-full">
          <span className="flex items-center text-center text-gray-300 justify-center font-monument font-bold text-5xl">
            The best spots in the world
          </span>

          <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 items-center w-full justify-around relative h-full">
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
