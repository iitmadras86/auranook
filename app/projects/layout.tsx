import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural Project Stories & Case Studies | Auranook",
  description: "Explore how Auranook enterprise systems have transformed commercial and residential spaces through innovative acoustic, façade, and interior surface solutions.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
