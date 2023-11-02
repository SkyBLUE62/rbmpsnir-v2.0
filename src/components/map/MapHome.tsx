"use client";

import "./index.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Balise } from "@prisma/client";

const MapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  {
    ssr: false, // Disable server-side rendering for this component
  }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  {
    ssr: false,
  }
);
const Marker = dynamic(
  () => import("react-leaflet").then((module) => module.Marker),
  {
    ssr: false,
  }
);
const Popup = dynamic(
  () => import("react-leaflet").then((module) => module.Popup),
  {
    ssr: false,
  }
);

import { useFilterDifficulty } from "@/store/filterDifficultyMap";

import expert from "../../../public/assets/images/markers/expert.svg";
import intermediate from "../../../public/assets/images/markers/intermediate.svg";
import beginner from "../../../public/assets/images/markers/beginner.svg";

type Props = {
  beacons: Balise[];
};

export const MapHome = ({ beacons }: Props) => {
  const [ready, setReady] = useState<boolean>(false);
  const { difficultyFilter } = useFilterDifficulty();

  useEffect(() => {
    setReady(true);
  }, []);

  const ExpertIcon = new L.Icon({
    iconUrl: beginner.src,
    iconSize: [32, 32],
  });

  const difficulteIcon = (difficulte: string) => {
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

  return (
    ready && (
      <div className="h-1/2-screen w-2/3 bg-gray-300 shadow-2xl rounded-3xl relative overflow-hidden">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {beacons
            .filter(
              ({ difficulte }) =>
                difficulte === difficultyFilter || difficultyFilter === "reset"
            )
            .map(({ latitude, longitude, lieu, difficulte }, index) => (
              <Marker
                key={index}
                position={[latitude, longitude]}
                icon={difficulteIcon(difficulte)}
              >
                <Popup>{lieu}</Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    )
  );
};
