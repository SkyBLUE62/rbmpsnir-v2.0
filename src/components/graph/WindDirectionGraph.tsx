"use client";

import type { CurrentData } from "@/dto/openweather";
import { findWindDirection } from "@/functions/findWindDirection";
type Props = {
  current: CurrentData;
};

export const WindDirectionGraph = ({ current }: Props) => {
  const styleArrowWindDirection = {
    N: "left-1/2 top-3 transform -translate-x-1/2 rotate-90",
    NE: "right-12 top-10 transform -translate-x-1/2 -translate-y-1/2 rotate-[135deg]",
    E: "right-8 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-180",
    SE: "left-2/3 top-[70%] transform -translate-x-1/2 -translate-y-1/2 rotate-[225deg]",
    S: "left-1/2 bottom-3 transform -translate-x-1/2 rotate-[270deg]",
    SW: "left-[35%] bottom-7 transform -translate-x-1/2 -rotate-45",
    W: "left-[30%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-0",
    NW: "left-[36%] top-[27%] transform -translate-x-1/2 -translate-y-1/2 rotate-45",
  };

  const styleUnderArrowWindDirection = {
    N: "left-1/2 bottom-3 transform -translate-x-1/2 rotate-90",
    NE: "left-[35%] bottom-7 transform -translate-x-1/2 rotate-[135deg]",
    E: "left-[30%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-180",
    SE: "left-[36%] top-[27%] transform -translate-x-1/2 -translate-y-1/2 -rotate-[135deg]",
    S: "left-1/2 top-3 transform -translate-x-1/2 -rotate-90",
    SW: "right-12 top-10 transform -translate-x-1/2 -translate-y-1/2 -rotate-45",
    W: "right-7 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-0",
    NW: "left-[65%] top-[69%] transform -translate-x-1/2 -translate-y-1/2 rotate-[44deg]",
  };

  const { wind_deg, wind_speed } = current;
  const windDirection = findWindDirection(wind_deg);
  return (
    <>
      <div className="relative h-full w-full">
        <div className="absolute opacity-50  w-32 h-32 border-2 border-dotted  rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute opacity-50 z-30 w-16 h-16 border-2 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        <span className="absolute -top-1 left-1/2 transform -translate-x-1/2  text-xs text-primary font-light font-montserrat">
          N
        </span>
        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-primary font-light font-montserrat">
          S
        </span>
        <span className="absolute top-1/2  right-10  transform -translate-y-1/2 text-xs text-primary font-light font-montserrat">
          E
        </span>
        <span className="absolute top-1/2 left-8 transform -translate-y-1/2 text-xs text-primary font-light font-montserrat">
          W
        </span>

        <span className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-primary font-light font-montserrat">
          {(wind_speed * 3.6).toFixed(0)}
          <br />
          KM/h
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          role="img"
          aria-label="Arrow direction wind"
          className={`absolute w-9 h-9 ${styleArrowWindDirection[windDirection]} `}
        >
          <g id="Left-2" data-name="Left">
            <polygon
              points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001"
              style={{ fill: "#E6E6E6" }} // Notez la syntaxe des accolades pour définir le style
            />
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className={`absolute z-10 w-10 h-9 ${styleUnderArrowWindDirection[windDirection]} `}
        >
          <line
            x1="10"
            y1="50"
            x2="90"
            y2="50"
            stroke="#E6E6E6"
            strokeWidth="4"
          />
          <circle cx="90" cy="50" r="10" fill="#E6E6E6" />
        </svg>
      </div>
    </>
  );
};
