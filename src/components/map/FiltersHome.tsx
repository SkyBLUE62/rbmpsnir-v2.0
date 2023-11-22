"use client";

import { useFilterDifficulty } from "@/store/filterDifficultyMap";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export const FiltersHome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainAnimations = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainAnimations.start("visible");
    }
  }, [isInView, mainAnimations]);

  const { changeDifficulty, resetDifficulty, difficultyFilter }: any =
    useFilterDifficulty();

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      animate={mainAnimations}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.25 }}
      className="relative lg:h-1/2-screen lg:w-[4%] h-12 w-full bg-gray-300 shadow-2xl rounded-full flex lg:flex-col flex-row  items-center justify-around"
    >
      <label className="relative inline-flex items-center cursor-pointer lg:rotate-90">
        <input
          type="checkbox"
          checked={difficultyFilter === "reset"}
          className="sr-only peer"
          onChange={() => resetDifficulty()}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>

      <label className="relative inline-flex items-center cursor-pointer lg:rotate-90">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={() => changeDifficulty("beginner")}
          checked={difficultyFilter === "beginner"}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
      </label>

      <label className="relative inline-flex items-center cursor-pointer lg:rotate-90">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={() => changeDifficulty("intermediate")}
          checked={difficultyFilter === "intermediate"}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
      </label>

      <label className="relative inline-flex items-center cursor-pointer lg:rotate-90">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={() => changeDifficulty("expert")}
          checked={difficultyFilter === "expert"}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
      </label>
    </motion.div>
  );
};
