"use client";

import { useEffect, useRef } from "react";

import { useNavIsOpen } from "@/store/navIsOpen";
import { useIsDisabledBtnNav } from "@/store/btnNavIsDisabled";

import { gsap } from "gsap";
import Link from "next/link";

export const Nav = () => {
  const { isOpen, changeIsOpen } = useNavIsOpen();
  const { changeIsDisabled } = useIsDisabledBtnNav();

  const containerNav = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen) {
      changeIsDisabled(true);
      document.body.style.overflow = "hidden";
      containerNav.current?.classList.remove("hidden");

      gsap.fromTo(
        containerNav.current,
        { width: 0, height: 0 },
        { width: "100%", height: "100vh", duration: 0.5 }
      );

      gsap.fromTo(
        navRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, delay: 0.5 }
      );

      setTimeout(() => {
        changeIsDisabled(false);
      }, 500);
    } else {
      changeIsDisabled(true);
      document.body.style.overflow = "auto";
      gsap.fromTo(
        navRef.current,
        { opacity: 1 },
        { opacity: 0, duration: 0.5 }
      );
      gsap.fromTo(
        containerNav.current,
        { width: "100%", height: "100vh" },
        { width: "0%", height: "0%", duration: 0.5, delay: 0.5 }
      );
      setTimeout(() => {
        changeIsDisabled(false);
      }, 500);
      setTimeout(() => {
        containerNav.current?.classList.add("hidden");
      }, 1000);
    }
  }, [isOpen, changeIsDisabled]);

  return (
    <div
      ref={containerNav}
      className="absolute top-0 hidden right-0 h-screen w-screen bg-[#000000] z-50"
    >
      <nav
        ref={navRef}
        className="h-full w-full flex flex-col md:flex-row md:gap-36 gap-4 justify-center items-center font-montserrat text-2xl md:text-4xl text-primary font-semibold"
      >
        <ul className="flex flex-col md:gap-16 gap-4 items-center justify-center md:justify-start md:items-start h-auto md:h-1/5">
          <Link
            href={"/home"}
            onClick={() => changeIsOpen(false)}
            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <li>Home</li>
          </Link>
          <Link
            href={"/beacons"}
            onClick={() => changeIsOpen(false)}
            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <li>List of beacons</li>
          </Link>
          <Link
            href={"/partners"}
            onClick={() => changeIsOpen(false)}
            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <li>Partenariats</li>
          </Link>
          <Link
            href={"mailto:pro.thomas.alexandre@gmail.com"}
            onClick={() => changeIsOpen(false)}
            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <li>Contact</li>
          </Link>
        </ul>
        <ul className="flex flex-col md:gap-16 gap-4 items-center justify-center md:justify-start md:items-start h-auto md:h-1/5">
          <Link
            href={"https://rbmp-snir.com"}
            onClick={() => changeIsOpen(false)}
            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <li>rbmp-snir.com</li>
          </Link>
          <Link
            href={"/mentions-legales"}
            onClick={() => changeIsOpen(false)}
            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <li>Mentions légales</li>
          </Link>
          <Link
            href={"/conditions-utilisation"}
            onClick={() => changeIsOpen(false)}
            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <li className="text-center">
              Conditions générales <br /> d{"'"}utilisation
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
