"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <>
      <div className="h-[100vh] w-1/2  bg-[#e6e6e6] bg-cover bg-right-top bg-no-repeat absolute right-0 top-0 z-10"></div>
      <div className="h-[100vh] w-1/2  bg-primary bg-cover bg-right-top bg-no-repeat absolute left-0 top-0 z-10"></div>

      <main className="h-[90vh] w-full relative max-w-9xl mx-auto">
        <motion.span
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute  z-40 top-1/4 left-[15%] lg:text-7xl  text-4xl font-monument font-bold text-primary"
        >
          The
        </motion.span>
        <h1 className="absolute z-40 h-auto w-full top-[35%] flex items-center justify-center  left-0  lg:text-11xl md:text-7xl lg:text-9xl text-5xl font-monument font-bold  ">
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-primary "
          >
            RBM
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-gradient-to-r from-[#E6E6E6] from-20% via-[#131212] to-[#131212] text-transparent bg-clip-text"
          >
            P
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-secondary"
          >
            SNIR
          </motion.span>
        </h1>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute z-40 md:top-2/3 lg:top-2/3  top-1/2 left-[60%] lg:text-7xl text-4xl text-secondary font-monument font-bold"
        >
          V2.0
        </motion.h2>
        <motion.p
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          animate="visible"
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.75 }}
          className="md:w-1/4 w-2/4 opacity-60 h-auto text-lg text-primary font-montserrat z-40 absolute lg:bottom-36 bottom-5 left-2 lg:left-0"
        >
          The best weather application for informing paragliders about the
          weather conditions at the best spots in the world!
        </motion.p>
      </main>
    </>
  );
};
