import { Metadata } from "next";

export const metadata: Metadata = {
  title: "rbmp-snir v2.0 | List of beacons",
  description:
    "The best weather application for informing paragliders about the weather conditions at the best spots in the world!",
};

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
