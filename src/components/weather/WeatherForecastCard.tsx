import Image from "next/image";

type Props = {
  temp: number;
  icon: string;
  wind: number;
  humidity: number;
  day: string;
};

export const WeatherForecastCard = ({
  temp,
  icon,
  wind,
  humidity,
  day,
}: Props) => {
  return (
    <div className="w-full h-full text-secondary bg-secondary rounded-3xl flex flex-col items-center justify-between py-4 shadow-sm shadow-white">
      <span className="font-monsterrat text-xl lg:text-xs xl:text-xl font-semibold ">{day}</span>
      <div className="w-3/4 h-[1px] bg-primary"></div>
      <div className="flex flex-col font-monument items-center justify-around">
        <Image src={icon} alt="weather" width={48} height={48}></Image>
        <span className="text-sm">{temp.toFixed(0)}°C</span>
      </div>
      <div className="flex flex-col font-monument items-center justify-around">
        <Image
          src="/assets/images/icons/weather/wind.svg"
          alt="weather"
          width={48}
          height={48}
        ></Image>
        <span className="text-sm">{wind.toFixed(0)} km/h</span>
      </div>
      <div className="flex flex-col font-monument items-center justify-around">
        <Image
          src="/assets/images/icons/weather/humidity.svg"
          alt="weather"
          width={48}
          height={48}
        ></Image>
        <span className="text-sm">{humidity.toFixed(0)}%</span>
      </div>
    </div>
  );
};
