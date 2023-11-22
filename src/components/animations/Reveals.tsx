"use client";

import React, { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  width?: string;
  bg?: boolean;
};

export const Reveals = ({
  children,
  width = "fit-content",
  bg = true,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className={`relative ${width} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className={`absolute top-1 bottom-1 left-0 right-0 ${
          bg ? "bg-primary" : "bg-secondary"
        } z-50`}
      ></motion.div>
    </div>
  );
};
