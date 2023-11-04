"use server";
import { BtnNav } from "./uiNav/BtnNav";
import { MainLogo } from "@/components/icons/MainLogo";
export const Header = () => {
  return (
    <div className="z-60 h-[10vh]  max-w-9xl mx-auto w-full flex flex-row items-center justify-between">
      <MainLogo />
      <BtnNav />
    </div>
  );
};
