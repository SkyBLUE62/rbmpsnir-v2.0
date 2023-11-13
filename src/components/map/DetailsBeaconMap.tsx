"use client";

import "./index.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import dynamic from "next/dynamic";

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
import expert from "../../../public/assets/images/markers/expert.svg";
import intermediate from "../../../public/assets/images/markers/intermediate.svg";
import beginner from "../../../public/assets/images/markers/beginner.svg";

type Props = {
  longitude: number;
  latitude: number;
  difficulte: string;
  lieu: string;
};

export const DetailsBeaconMap = ({
  latitude,
  longitude,
  difficulte,
  lieu,
}: Props) => {
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
    <MapContainer
      center={[latitude, longitude]}
      zoom={5}
      scrollWheelZoom={true}
      className="rounded-2xl z-10"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={[latitude, longitude]}
        icon={difficulteIcon(difficulte)}
      >
        <Popup>{lieu}</Popup>
      </Marker>
    </MapContainer>
  );
};
