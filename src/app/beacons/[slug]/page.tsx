"use server";
import {
  fetchHistoryLastDay,
  fetchOpenWeatherData,
} from "@/functions/fetchOpenWeatherData";
import prisma from "../../../../prisma/db/prisma";
import type { Balise } from "@prisma/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { WindDirectionGraph } from "@/components/graph/WindDirectionGraph";
import { SunriseGraph } from "@/components/graph/SunriseGraph";
import { PressureCard } from "@/components/graph/PressureCard";
import { WeatherForecast } from "@/components/weather/WeatherForecast";
import { DailyTempGraph } from "@/components/graph/DailyTempGraph";
import { HourlyData } from "@/dto/openweather";
import { DetailsBeaconMap } from "@/components/map/DetailsBeaconMap";
import { IDToIconOpenWeather } from "@/functions/IDToIconOpenWeather";

const page = async ({ params }: { params: { slug: string } }) => {
  let beaconData: Balise;

  try {
    beaconData = await prisma.balise.findFirstOrThrow({
      where: {
        slug: params.slug,
        visible: true,
      },
    });
  } catch (error) {
    notFound();
  }

  const { longitude, latitude, lieu, difficulte } = beaconData;

  const dataOpenWeather = await fetchOpenWeatherData({
    longitude: longitude,
    latitude: latitude,
  });

  const currentTimestamp: number = Math.floor(Date.now() / 1000);

  const historyDataLastDay = await fetchHistoryLastDay({
    longitude: longitude,
    latitude: latitude,
    start: currentTimestamp - 86400,
  });

  const historyDataCurrentDay = await fetchHistoryLastDay({
    longitude: longitude,
    latitude: latitude,
    start: currentTimestamp,
  });

  const historyData: HourlyData[] = historyDataLastDay.hourly.concat(
    historyDataCurrentDay.hourly
  );

  const { current, hourly, daily } = dataOpenWeather;
  const iconById = IDToIconOpenWeather(current.weather[0].id);
  return (
    <>
      <div className="h-[90vh] w-full py-8 bg-primary bg-opacity-90">
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
                      src={iconById}
                      alt="weather"
                      width={100}
                      height={100}
                    ></Image>
                    <span className="text-3xl font-monument text-primary font-light">
                      {current.temp.toFixed(0)} C°
                    </span>
                  </div>

                  <WindDirectionGraph current={current} />

                  <div className="h-auto relative  rounded-3xl">
                    <div className="w-full flex flex-row justify-start items-center">
                      <Image
                        src={"/assets/images/icons/weather/sunrise.svg"}
                        alt="weather"
                        width={32}
                        height={32}
                      />
                      <span className="text-lg font-montserrat text-primary">
                        Sunset
                      </span>
                    </div>

                    <SunriseGraph current={current} />
                  </div>

                  <PressureCard current={current} />
                </div>
              </div>
            </div>
            <div className=" col-span-2 h-auto relative bg-primary rounded-3xl shadow-lg shadow-black">
              <WeatherForecast daily={daily} />
            </div>
            <div className="col-span-2 relative h-auto bg-primary rounded-3xl shadow-lg shadow-black">
              <DailyTempGraph historyData={historyData} />
            </div>
            <div className="col-span-1 relative h-auto bg-primary rounded-3xl shadow-lg shadow-black">
              <DetailsBeaconMap
                latitude={latitude}
                longitude={longitude}
                lieu={lieu}
                difficulte={difficulte}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
