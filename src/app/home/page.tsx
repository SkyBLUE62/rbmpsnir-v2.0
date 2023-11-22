"use server";
import { Hero } from "@/components/features/Hero";
import { BalisesSection } from "@/components/features/BalisesSection";
import { QuoteSection } from "@/components/features/QuoteSection";
import { Analytics } from "@/components/features/Analytics";
import prisma from "../../../prisma/db/prisma";
import { TypeBalise, Balise, Club } from "@prisma/client";
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "rbmp-snir v2.0 | Home",
  description: "Home page of rbmp-snir v2.0",
};


export default async function Home() {
  const typeBeacons: TypeBalise[] = await prisma.typeBalise.findMany({});
  const beacons: Balise[] = await prisma.balise.findMany({
    where: {
      visible: true,
    },
  });
  const clubs: Club[] = await prisma.club.findMany({});
  return (
    <>
      <Hero />
      <div className="lg:h-screen h-auto bg-primary relative top-0">
        {/* @ts-expect-error Server Component */}
        <BalisesSection />
        <Analytics clubs={clubs} beacons={beacons} />
      </div>
      <QuoteSection typeBeacons={typeBeacons} />
    </>
  );
}
