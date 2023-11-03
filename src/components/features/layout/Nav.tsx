"use client";

import { useNavIsOpen } from "@/store/navIsOpen";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export const Nav = () => {
  const { isOpen } = useNavIsOpen();
  const containerNav = useRef<HTMLDivElement>(null);

  const [renderNav, setRenderNav] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      containerNav.current?.classList.remove("hidden");
      
      gsap.fromTo(
        containerNav.current,
        { width: 0, height: 0 },
        { width: "100%", height: "100vh", duration: 0.5 }
      );
    } else {
      document.body.style.overflow = "auto";
      gsap.fromTo(
        containerNav.current,
        { width: "100%", height: "100vh" },
        { width: "0%", height: "0%", duration: 0.5 }
      );

      setTimeout(() => {
        containerNav.current?.classList.add("hidden");
      }, 1000);
    }
  }, [isOpen]);

  return (
    <div
      ref={containerNav}
      className="absolute top-0 hidden right-0 h-screen w-screen bg-[#000000] z-50"
    >
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
  );
};
