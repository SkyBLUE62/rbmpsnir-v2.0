import { CurrentData } from "@/dto/openweather";
import CircularProgressTemplate from "../ui/CircularProgress";
import Image from "next/image";

type Props = {
  current: CurrentData;
};

export const PressureCard = ({ current }: Props) => {
  const { pressure } = current;
  return (
    <div className="h-auto relative  rounded-3xl">
      <div className="w-full flex flex-row justify-start items-center">
        <Image
          src={"/assets/images/icons/weather/barometer.svg"}
          alt="weather"
          width={32}
          height={32}
        />
        <span className="text-lg font-montserrat text-primary">Pressure</span>
      </div>
      <CircularProgressTemplate value={pressure} unit={"hPa"} />
    </div>
  );
};
