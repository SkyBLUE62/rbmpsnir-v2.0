"use client";
import { useNavIsOpen } from "@/store/navIsOpen";
import { useEffect } from "react";

export const Nav = () => {
  const { isOpen } = useNavIsOpen();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return isOpen ? (
    <div className="absolute top-0 right-0 h-screen w-screen bg-[#000000] z-50">
      <nav className="h-full w-full flex flex-row gap-36 justify-center items-center font-montserrat text-4xl text-primary font-semibold">
        <ul className="flex flex-col gap-16 h-1/5">
          <li>Home</li>
          <li>List of beacons</li>
          <li>Partenariats</li>
          <li>Contact</li>
        </ul>
        <ul className="flex flex-col gap-16 h-1/5">
          <li>rbmp-snir.com</li>
          <li>Mentions légales</li>
          <li className="text-center">
            Conditions générales <br /> d{"'"}utilisation
          </li>
        </ul>
      </nav>
    </div>
  ) : null;
};
