import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Auranook | Your Architectural Specification Partner",
  description: "More than a building materials supplier. Auranook provides expert technical consultation, BOQ estimation, CAD detailing, and site coordination for architectural projects.",
};

export default function WhyAuranookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
