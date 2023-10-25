"use server";
import { Hero } from "@/components/features/Hero";
import { BalisesSection } from "@/components/features/BalisesSection";
export default async function Home() {
  return (
    <>
      <Hero />
      <div className="h-screen bg-primary">
        <BalisesSection />
      </div>
    </>
  );
}
