"use client";

import type { Balise } from "@prisma/client";
import { motion, useAnimation, useInView } from "framer-motion";

import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = {
  beacons: Balise[];
};

export const BalisesTab = ({ beacons }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const containerAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      containerAnimation.start("visible");
    }
  }, [isInView, containerAnimation]);

  return (
    beacons && (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={containerAnimation}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="h-1/2-screen md:w-[50%] lg:w-[25%]  w-full relative overflow-y-scroll no-scrollbar bg-gray-300 shadow-2xl rounded-3xl"
      >
        <div className="bg-gray-200 uppercase z-40 w-full h-[10%] rounded-t-3xl flex justify-center items-center font-montserrat text-xl text-secondary font-bold shadow-xl ">
          Spots
        </div>
        <table className="w-full h-auto mt-4 ">
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody className="flex flex-col items-center justify-center gap-4 pb-4">
            {beacons.map(({ lieu, slug }, index) => (
              <tr
                className="w-1/2 h-14 bg-transparent border-2 border-[#131212] rounded-2xl flex items-center justify-center text-secondary font-montserrat font-semibold"
                key={index}
              >
                <td className="px-2 text-center">
                  <Link href={`/beacons/${slug}`} className="h-full w-full">
                    {lieu}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    )
  );
};
