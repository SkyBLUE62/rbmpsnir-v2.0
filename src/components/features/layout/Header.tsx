"use server";
import { BtnNav } from "./uiNav/BtnNav";
import { MainLogo } from "@/components/icons/MainLogo";

export const Header = () => {
  return (
    <div className="h-[10vh] sm:h-auto w-full bg-primary shadow-black shadow-lg ">
      <div className="max-w-9xl  h-full mx-auto w-full flex flex-row items-center justify-between px-4 md:px-4 lg:px-4 xl:px-0 pt-4 lg:pt-0 ">
        <MainLogo />
        <BtnNav />
      </div>
    </div>
  );
};
