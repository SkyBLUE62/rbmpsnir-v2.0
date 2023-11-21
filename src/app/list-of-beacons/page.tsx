import { notFound } from "next/navigation";
import prisma from "../../../prisma/db/prisma";
import { Balise, Club } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
const page = async () => {
  let beacons;

  try {
    beacons = await prisma.balise.findMany({
      where: {
        visible: true,
      },
      include: {
        club: {
          select: {
            name: true,
            create_at: true,
          },
        },
      },
    });
  } catch (error) {
    notFound();
  }

  return (
    <>
      <div className="md:min-h-screen h-auto w-full px-4 md:px-0  xl:w-2/3 mx-auto p-6 no-scrollbar overflow-scroll font-montserrat">
        <h1 className="text-3xl font-bold text-center font-monument">
          List of beacons
        </h1>
        <table className="mt-4 w-full min-w-max table-auto text-left font-montserrat">
          <thead>
            <tr>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-semibold text-sm text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Location
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-semibold text-sm text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Longitude
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-semibold text-sm text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Latitude
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-semibold text-sm text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Difficulte
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-semibold text-sm text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Club
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-semibold text-sm text-blue-gray-900 flex items-center justify-between gap-2  leading-none opacity-70">
                  Weather
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {beacons.map(
              (
                {
                  lieu,
                  longitude,
                  latitude,
                  difficulte,
                  slug,
                  create_at,
                  club,
                },
                index
              ) => (
                <tr key={index}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <p className="block antialiased  text-sm leading-normal text-blue-gray-900 font-normal">
                          {lieu}
                        </p>
                        <p className="block antialiased  text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                          Start date: {new Date(create_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <p className="block antialiased  text-sm leading-normal text-blue-gray-900 font-normal">
                          {longitude}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <p className="block antialiased  text-sm leading-normal text-blue-gray-900 font-normal">
                          {latitude}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="w-max">
                      <div
                        className={`relative grid items-center  font-bold uppercase whitespace-nowrap select-none ${
                          difficulte === "beginner"
                            ? "text-green-600 bg-green-500/20"
                            : difficulte === "intermediate"
                            ? "text-yellow-600 bg-yellow-500/20"
                            : "text-red-600 bg-red-500/20"
                        }  py-1 px-2 text-xs rounded-md`}
                      >
                        <span className="">{difficulte}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <p className="block antialiased  text-sm leading-normal text-blue-gray-900 font-normal">
                          {club.name}
                        </p>
                        <p className="block antialiased  text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                          Start date:
                          {new Date(club.create_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-start md:justify-center gap-3">
                      <div className="flex flex-col items-start md:justify-center">
                        <button className="block antialiased  text-sm leading-normal text-blue-gray-900 font-normal">
                          <Link href={`/beacons/${slug}`}>
                            <Image
                              src="/assets/images/icons/calendar.png"
                              alt="weather"
                              width={24}
                              height={24}
                            ></Image>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;
