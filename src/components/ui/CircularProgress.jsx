"use client";

import React from "react";

export default function CircularProgressTemplate({ value, unit }) {
  return (
    <div
      className="radial-progress absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2 text-primary"
      style={{ "--value": "70", "--size": "6rem", "--thickness": "4px" }}
    >
      <div className="flex flex-col items-center justify-center">
        <span>{value}</span>
        <span>{unit}</span>
      </div>
    </div>
  );
}
