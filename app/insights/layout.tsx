import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architect Knowledge Center | Auranook Insights",
  description: "Technical guides, comparisons, and best practices for specifying architectural ceiling systems, acoustic solutions, façades, and decorative surfaces.",
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
