"use client";

import "./index.css";
import "leaflet/dist/leaflet.css";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Balise } from "@prisma/client";
import { difficulteIcon } from "@/functions/difficulteIcon";
import { motion, useAnimation, useInView } from "framer-motion";

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
import Link from "next/link";

type Props = {
  beacons: Balise[];
};

const MapHome = ({ beacons }: Props) => {
  const [ready, setReady] = useState<boolean>(false);
  const { difficultyFilter } = useFilterDifficulty();

  const ref = useRef<null | HTMLDivElement>(null);
  const containerAnimation = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      containerAnimation.start("visible");
    }
  }, [isInView, containerAnimation]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={containerAnimation}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="h-1/2-screen lg:w-2/3 w-full bg-gray-300 shadow-2xl rounded-3xl z-10 relative overflow-hidden"
    >
      <MapContainer
        center={[46.8566, 2.3522]}
        zoom={2.3}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {beacons
          .filter(
            ({ difficulte }) =>
              difficulte === difficultyFilter || difficultyFilter === "reset"
          )
          .map(({ latitude, longitude, lieu, difficulte, slug }, index) => (
            <Marker
              key={index}
              position={[latitude, longitude]}
              icon={difficulteIcon(difficulte)}
            >
              <Popup>
                <Link href={`/beacons/${slug}`}>{lieu}</Link>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </motion.div>
  );
};

export default MapHome;
