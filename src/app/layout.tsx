import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/features/layout/Header";

export const metadata: Metadata = {
  title: "rbmp-snir v2.0 | Home",
  description: "Home page of rbmp-snir v2.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen w-auto flex flex-col flex-1  relative overflow-x-hidden">
          {/* @ts-expect-error Server Component */}
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
