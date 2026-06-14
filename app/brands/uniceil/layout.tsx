import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Uniceil | Baffle Ceilings, Acoustic Systems & Facades",
  description: "Auranook is the official authorized distributor for The Uniceil in India. Discover commercial architectural ceiling systems, interior wall cladding, and exterior façades.",
};

export default function UniceilLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
