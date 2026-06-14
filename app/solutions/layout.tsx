import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Specific Architectural Solutions | Auranook",
  description: "High-performance architectural ceiling, wall, and façade systems configured for commercial offices, hospitality, retail, healthcare, and luxury residential sectors.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
