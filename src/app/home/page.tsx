"use server";
import { Hero } from "@/components/features/Hero";
import { BalisesSection } from "@/components/features/BalisesSection";
import { QuoteSection } from "@/components/features/QuoteSection";
import { Analytics } from "@/components/features/Analytics";
export default async function Home() {
  return (
    <>
      <Hero />
      <div className="h-screen bg-primary relative">
        <BalisesSection />
        <Analytics />
      </div>
      <QuoteSection />
    </>
  );
}
