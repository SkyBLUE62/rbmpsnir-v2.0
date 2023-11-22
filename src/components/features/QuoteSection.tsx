"use client";

import { TypeBalise } from "@prisma/client";
import Image from "next/image";
import { FormQuote } from "../modal/FormQuote";
import { BtnFormQuote } from "../ui/BtnFormQuote";
import { useEffect, useRef, useState } from "react";
import { Reveals } from "../animations/Reveals";
import { motion, useAnimation, useInView } from "framer-motion";
type Props = {
  typeBeacons: TypeBalise[];
};

export const QuoteSection = ({ typeBeacons }: Props) => {
  const [openModalId, setOpenModalId] = useState<string | null>("");
  const [viewModal, setViewModal] = useState(false);

  const openModal = (id: string) => {
    setOpenModalId(id);
    setViewModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setViewModal(false);
    setTimeout(() => {
      setOpenModalId(null);
    }, 500);
    document.body.style.overflow = "auto";
  };

  const calculateDelay = (index: number) => index * 0.2;

  const quoteRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(quoteRef, { once: true });
  const containerAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      containerAnimation.start("visible");
    }
  }, [isInView, containerAnimation]);

  return (
    <div className="h-auto mt-[20vh] flex items-center bg-secondary">
      <div className="max-w-9xl mx-auto h-full flex flex-col md:gap-16 gap-0 font-montserrat text-primary items-center justify-center ">
        <Reveals bg={true}>
          <span className="flex text-center items-center justify-center text-secondary font-semibold text-5xl font-monument ">
            Our beacons offers
          </span>
        </Reveals>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-2  grid-row-1 xl:px-0 lg:px-4 md:px-4 px-4 gap-16 gap-y-6 h-auto w-full py-10">
          {typeBeacons.map(({ name, image, id, description }, index) => (
            <motion.div
              key={index}
              ref={quoteRef}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={containerAnimation}
              transition={{
                duration: 1,
                delay: calculateDelay(index),
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="h-full w-full bg-primary rounded-3xl shadow-black shadow-2xl mb-4 p-4"
            >
              <div className="w-full flex items-center justify-center">
                <Image
                  src={"/assets/images/balises/" + image}
                  alt={"/assets/images/balises/" + image}
                  width={500}
                  height={500}
                  className="rounded-3xl h-[15rem] w-full object-cover object-top"
                />
              </div>

              <div className="flex flex-col items-center h-[15rem] justify-around py-4 gap-4 px-3">
                <Reveals bg={false}>
                  <div className="w-full flex items-center justify-center text-center text-xl">
                    {name}
                  </div>
                </Reveals>
                <Reveals bg={false}>
                  <div className="flex items-center justify-center text-center opacity-60 text-base">
                    {description}
                  </div>
                </Reveals>
                <BtnFormQuote id={id} setOpenModalId={() => openModal(id)} />
                {openModalId === id && (
                  <FormQuote
                    viewModal={viewModal}
                    beaconDetail={typeBeacons[index] as TypeBalise}
                    closeModal={closeModal}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
