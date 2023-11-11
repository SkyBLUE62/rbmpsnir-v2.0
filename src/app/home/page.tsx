"use server";
import { Hero } from "@/components/features/Hero";
import { BalisesSection } from "@/components/features/BalisesSection";
import { QuoteSection } from "@/components/features/QuoteSection";
import { Analytics } from "@/components/features/Analytics";
import prisma from "../../../prisma/db/prisma";
import { TypeBalise } from "@prisma/client";
export default async function Home() {
  const typeBeacons: TypeBalise[] = await prisma.typeBalise.findMany({});
  console.log(typeBeacons);
  return (
    <>
      <Hero />
      <div className="h-screen bg-primary relative">
        {/* @ts-expect-error Server Component */}
        <BalisesSection />
        <Analytics />
      </div>
      <QuoteSection typeBeacons={typeBeacons} />
    </>
  );
}
