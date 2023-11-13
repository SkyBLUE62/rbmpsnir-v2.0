"use client";

import "./index.css";
import "leaflet/dist/leaflet.css";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Balise } from "@prisma/client";
import { difficulteIcon } from "@/functions/difficulteIcon";
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

type Props = {
  beacons: Balise[];
};

export const MapHome = ({ beacons }: Props) => {
  const [ready, setReady] = useState<boolean>(false);
  const { difficultyFilter } = useFilterDifficulty();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReady(true);
    }
  }, []);

  return (
    ready && (
      <div className="h-1/2-screen w-2/3 bg-gray-300 shadow-2xl rounded-3xl z-10 relative overflow-hidden">
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
