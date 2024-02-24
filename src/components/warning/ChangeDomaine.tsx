import Link from "next/link";
import React from "react";

export const ChangeDomaine = () => {
  return (
    <div className="bottom-0 fixed z-50  w-full h-26 px-4 md:h-12 bg-red-400 bg-opacity-50 flex justify-center items-center text-white rounded-t-2xl">
      <p className="text-lg font-montserrat font-bold">
        Information: from March 1, 2024{" "}
        <Link href="https://rbmp-snir.com" className="text-blue-500">
          rbmp-snir.com
        </Link>{" "}
        becomes{" "}
        <Link className="text-blue-500 underline" href="https://rbmpsnir.fr">
          rbmpsnir.fr
        </Link>{" "}
        , please take this change into account !
      </p>
    </div>
  );
};
