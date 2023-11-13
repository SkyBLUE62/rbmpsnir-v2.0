"use server";
import { DailyData } from "@/dto/openweather";
import { WeatherForecastCard } from "./WeatherForecastCard";
import { IDToIconOpenWeather } from "@/functions/IDToIconOpenWeather";

type Props = {
  daily: DailyData[];
};

export const WeatherForecast = ({ daily }: Props) => {
  const forecastDays = 7;
  const forecastCards = [];

  function getDayFromTimestamp(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dayIndex = date.getDay();
    const day = daysOfWeek[dayIndex];

    return day;
  }
  for (let index = 1; index <= forecastDays; index++) {
    console.log(daily[index].weather[0].id);
    forecastCards.push(
      <WeatherForecastCard
        key={index}
        temp={daily[index].temp.day}
        wind={daily[index].wind_speed}
        humidity={daily[index].humidity}
        icon={IDToIconOpenWeather(daily[index].weather[0].id)}
        day={getDayFromTimestamp(daily[index].dt)}
      />
    );
  }

  return (
    <div className="w-full h-full  grid grid-cols-7 px-8 py-8 gap-8">
      {forecastCards}
    </div>
  );
};
