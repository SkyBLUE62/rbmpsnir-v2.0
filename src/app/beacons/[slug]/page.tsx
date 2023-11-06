"use server";
import { fetchOpenWeatherData } from "@/functions/fetchOpenWeatherData";
import prisma from "../../../../prisma/db/prisma";
import type { Balise } from "@prisma/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { WindDirectionGraph } from "@/components/graph/WindDirectionGraph";
import {SunriseGraph} from "@/components/graph/SunriseGraph";

const page = async ({ params }: { params: { slug: string } }) => {
  let beaconData: Balise;

  try {
    beaconData = await prisma.balise.findFirstOrThrow({
      where: {
        slug: params.slug,
        visible: true,
      },
    });
    console.log(beaconData);
  } catch (error) {
    notFound();
  }

  const { longitude, latitude, lieu } = beaconData;

  const dataOpenWeather = await fetchOpenWeatherData({
    longitude: longitude,
    latitude: latitude,
  });

  const { current, hourly, daily } = dataOpenWeather;
  console.log(current);

  return (
    <>
      <div className="h-[90vh] w-full pb-8">
        <div className="h-full w-full max-w-9xl mx-auto">
          <div className="grid grid-cols-3 grid-rows-2  h-full w-full gap-8 ">
            <div className="grid grid-cols-1 grid-rows-1 h-full w-full gap-8 ">
              <div className="col-span-1 h-full w-full bg-primary rounded-3xl shadow-lg shadow-black">
                <h1 className="h-[12%] w-full bg-secondary text-secondary rounded-t-2xl flex items-center justify-center font-montserrat text-xl font-semibold">
                  {lieu}
                </h1>
                <div className="h-[88%] w-full grid grid-cols-2 grid-rows-2 gap-8 py-2 px-2">
                  <div className="h-auto relative  flex flex-row items-center justify-around">
                    <Image
                      src="/assets/images/icons/weather/clear-day.svg"
                      alt="weather"
                      width={100}
                      height={100}
                    ></Image>
                    <span className="text-3xl font-monument text-primary font-light">
                      {current.temp.toFixed(0)} C°
                    </span>
                  </div>

                  <WindDirectionGraph current={current} />

                  <div className="h-auto relative bg-secondary rounded-3xl shadow-lg shadow-black">
                    <SunriseGraph />
                  </div>
                  <div className="h-auto relative bg-secondary rounded-3xl shadow-lg shadow-black">
                    pression
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-2 h-auto relative bg-primary rounded-3xl shadow-lg shadow-black"></div>
            <div className=" col-span-3 h-auto bg-primary rounded-3xl shadow-lg shadow-black">
              htrehrt
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
