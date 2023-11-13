"use client"

import expert from "../../public/assets/images/markers/expert.svg";
import intermediate from "../../public/assets/images/markers/intermediate.svg";
import beginner from "../../public/assets/images/markers/beginner.svg";

import L from "leaflet";

export const difficulteIcon = (difficulte: string) => {
  switch (difficulte) {
    case "beginner":
      return new L.Icon({
        iconUrl: beginner.src,
        iconSize: [32, 32],
      });
    case "intermediate":
      return new L.Icon({
        iconUrl: intermediate.src,
        iconSize: [32, 32],
      });
    case "expert":
      return new L.Icon({
        iconUrl: expert.src,
        iconSize: [32, 32],
      });
  }
};
