"use client";

import React from "react";

export default function CircularProgressTemplate({ value, unit }) {
  return (
    <div className="relative -top-2  w-full h-full">
      <div className="md:h-24 md:w-24 w-20 h-20 flex flex-col items-center justify-center border-2 border-primary rounded-full absolute left-1/2 top-1/3 xl:top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="md:text-xl text-base font-monument text-primary">
          {value}
        </span>
        <span className="text-sm font-monument text-primary">{unit}</span>
      </div>
    </div>
  );
}
