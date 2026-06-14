import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural Inspiration Gallery | Auranook",
  description: "Visual inspiration for architects and designers. Explore commercial ceilings, exterior façades, acoustic solutions, and decorative interior surfaces by The Uniceil and Polygranite.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
