"use client";

import React from "react";

export default function CircularProgressTemplate({ value, unit }) {
  return (
    <div className="relative w-full h-full">
      <div className="h-24 w-24 flex flex-col items-center justify-center border-2 border-primary rounded-full absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-xl font-monument text-primary">{value}</span>
        <span className="text-sm font-monument text-primary">{unit}</span>
      </div>
    </div>
  );
}
