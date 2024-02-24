import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/features/layout/Header";
import { Footer } from "@/components/features/layout/Footer";
import { Nav } from "@/components/features/layout/Nav";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "rbmp-snir v2.0",
  description: "rbmp-snir v2.0",
  keywords: "weather, paragliders, weather application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="min-h-screen w-auto flex flex-col flex-1 relative overflow-x-hidden bg-secondary">
          <Header />
          <Nav />
          <ToastContainer />
          <Analytics />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
